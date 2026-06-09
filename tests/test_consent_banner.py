"""
Consent banner UI tests: visibility, accept/decline, returning-visitor behaviour.
"""
from playwright.sync_api import Page, expect

from conftest import STORAGE_KEY


def _clear_consent(page: Page) -> None:
    page.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page.reload(wait_until="domcontentloaded")


def test_banner_visible_on_first_visit(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    _clear_consent(page)
    expect(page.locator("#cd-consent-banner")).to_be_visible()
    expect(page.locator("#cd-consent-accept")).to_be_visible()
    expect(page.locator("#cd-consent-decline")).to_be_visible()


def test_accept_sets_granted_and_hides_banner(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    _clear_consent(page)
    page.locator("#cd-consent-accept").click()
    page.wait_for_function(
        f"() => localStorage.getItem('{STORAGE_KEY}') === 'granted'"
    )
    assert page.evaluate(f"localStorage.getItem('{STORAGE_KEY}')") == "granted"
    expect(page.locator("#cd-consent-banner")).to_be_hidden()


def test_decline_sets_denied_and_hides_banner(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    _clear_consent(page)
    page.locator("#cd-consent-decline").click()
    page.wait_for_function(
        f"() => localStorage.getItem('{STORAGE_KEY}') === 'denied'"
    )
    assert page.evaluate(f"localStorage.getItem('{STORAGE_KEY}')") == "denied"
    expect(page.locator("#cd-consent-banner")).to_be_hidden()


def test_granted_returning_visitor_no_banner(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    page.evaluate(f"localStorage.setItem('{STORAGE_KEY}', 'granted')")
    page.reload(wait_until="domcontentloaded")
    expect(page.locator("#cd-consent-banner")).to_have_count(0)


def test_denied_returning_visitor_no_banner(page: Page, base_url: str) -> None:
    page.goto(base_url, wait_until="domcontentloaded")
    page.evaluate(f"localStorage.setItem('{STORAGE_KEY}', 'denied')")
    page.reload(wait_until="domcontentloaded")
    expect(page.locator("#cd-consent-banner")).to_have_count(0)
