"""
Network-level GA tests: verify that no GA collect requests fire on Decline
and no gtag.js script is fetched until consent is granted. Also asserts that
the consent bootstrap (ga-consent-init.js) loads on every locale page.
"""
from __future__ import annotations

import pytest
from playwright.sync_api import Page, expect

from conftest import STORAGE_KEY, is_ga_collect, is_ga_script


LOCALE_PAGES = [
    "",
    "ca/",
    "ca/about/",
    "ca/analysis/",
    "ca/introduction/",
    "ca/resources/",
    "en/",
    "en/about/",
    "en/analysis/",
    "en/introduction/",
    "en/resources/",
    "es/",
    "es/about/",
    "es/analysis/",
    "es/introduction/",
    "es/resources/",
]


def _latest_consent_update(page: Page):
    return page.evaluate(
        """
        () => {
            var dl = window.dataLayer || [];
            for (var i = dl.length - 1; i >= 0; i--) {
                var entry = dl[i];
                if (entry[0] === 'consent' && entry[1] === 'update') {
                    return entry[2];
                }
            }
            return null;
        }
        """
    )


def test_decline_no_collect_requests(page: Page, base_url: str) -> None:
    collected: list[str] = []
    page.on("request", lambda req: collected.append(req.url) if is_ga_collect(req.url) else None)

    page.goto(base_url, wait_until="domcontentloaded")
    page.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page.reload(wait_until="domcontentloaded")
    page.locator("#cd-consent-decline").click()
    page.wait_for_load_state("networkidle")

    assert collected == [], f"GA collect requests intercepted: {collected}"

    state = _latest_consent_update(page)
    assert state is not None
    assert state.get("analytics_storage") == "denied"
    assert state.get("ad_storage") == "denied"


def test_accept_dataLayer_analytics_granted(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    page.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page.reload(wait_until="domcontentloaded")
    page.locator("#cd-consent-accept").click()

    page.wait_for_function(
        """
        () => {
            var dl = window.dataLayer || [];
            for (var i = dl.length - 1; i >= 0; i--) {
                var e = dl[i];
                if (e[0] === 'consent' && e[1] === 'update'
                    && e[2] && e[2].analytics_storage === 'granted') return true;
            }
            return false;
        }
        """
    )
    state = _latest_consent_update(page)
    assert state["analytics_storage"] == "granted"
    assert state["ad_storage"] == "denied"


def test_stored_denied_no_collect_on_reload(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    page.evaluate(f"localStorage.setItem('{STORAGE_KEY}', 'denied')")

    collected: list[str] = []
    page.on("request", lambda req: collected.append(req.url) if is_ga_collect(req.url) else None)

    page.reload(wait_until="domcontentloaded")
    page.wait_for_load_state("networkidle")

    assert collected == [], f"GA collect requests intercepted: {collected}"


def test_no_gtag_script_fetched_when_consent_absent(page: Page, base_url: str) -> None:
    scripts: list[str] = []
    page.on("request", lambda req: scripts.append(req.url) if is_ga_script(req.url) else None)

    page.goto(base_url, wait_until="domcontentloaded")
    page.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page.reload(wait_until="domcontentloaded")
    page.wait_for_load_state("networkidle")

    assert scripts == [], f"gtag.js fetched without consent: {scripts}"


def test_no_gtag_script_fetched_when_denied_stored(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    page.evaluate(f"localStorage.setItem('{STORAGE_KEY}', 'denied')")

    scripts: list[str] = []
    page.on("request", lambda req: scripts.append(req.url) if is_ga_script(req.url) else None)

    page.reload(wait_until="domcontentloaded")
    page.wait_for_load_state("networkidle")

    assert scripts == [], f"gtag.js fetched with 'denied' stored: {scripts}"


def test_gtag_script_fetched_on_accept(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    page.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page.reload(wait_until="domcontentloaded")

    with page.expect_request(lambda req: is_ga_script(req.url), timeout=5000):
        page.locator("#cd-consent-accept").click()


@pytest.mark.parametrize("path", LOCALE_PAGES)
def test_ga_init_loads_on_every_page(page: Page, base_url: str, path: str) -> None:
    init_responses: list[int] = []

    def _record(resp):
        if resp.url.endswith("/data/js/ga-consent-init.js"):
            init_responses.append(resp.status)

    page.on("response", _record)

    page.goto(base_url + path, wait_until="domcontentloaded")

    assert init_responses, f"ga-consent-init.js was not requested on {path!r}"
    assert all(s == 200 for s in init_responses), (
        f"ga-consent-init.js returned non-200 on {path!r}: {init_responses}"
    )

    has_datalayer = page.evaluate("() => Array.isArray(window.dataLayer) && window.dataLayer.length > 0")
    assert has_datalayer, f"window.dataLayer not populated on {path!r}"
