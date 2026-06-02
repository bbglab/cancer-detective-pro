"""
Test: After clicking Decline, no data-collection requests reach Google Analytics.
After clicking Accept, analytics_storage consent is 'granted' in the dataLayer.

Domains / paths watched:
  - google-analytics.com/g/collect   (GA4 hit endpoint)
  - google-analytics.com/collect     (UA hit endpoint)
  - analytics.google.com/g/collect   (GA4 regional endpoint)
"""
from playwright.sync_api import sync_playwright
import sys

BASE_URL   = "http://localhost:8080/"
STORAGE_KEY = "cd_cookie_consent"

# GA data-collection endpoints (script downloads are NOT included)
GA_COLLECT_PATTERNS = [
    "/g/collect",
    "/collect",
]
GA_DOMAINS = [
    "google-analytics.com",
    "analytics.google.com",
]

PASS = "\033[32m✔\033[0m"
FAIL = "\033[31m✘\033[0m"
INFO = "\033[34mℹ\033[0m"

results = []

def check(name, ok, detail=""):
    icon = PASS if ok else FAIL
    print(f"  {icon}  {name}" + (f"  →  {detail}" if detail else ""))
    results.append((name, ok))


def is_ga_collect(url: str) -> bool:
    """Return True if the URL is a GA data-collection endpoint."""
    for domain in GA_DOMAINS:
        if domain in url:
            for path in GA_COLLECT_PATTERNS:
                if path in url:
                    return True
    return False



with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # ── TEST 1: DECLINE → no GA collect requests ─────────────────────────────
    print(f"\n{INFO}  TEST 1 — Decline should produce ZERO GA collect requests")

    ctx1 = browser.new_context()
    page1 = ctx1.new_page()

    ga_requests_after_decline = []

    # Start capturing before the page loads (catches any unintended GA hits on initial load)
    page1.on(
        "request",
        lambda req: ga_requests_after_decline.append(req.url) if is_ga_collect(req.url) else None,
    )

    page1.goto(BASE_URL, wait_until="domcontentloaded")
    # Clear any pre-existing consent and reload
    page1.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page1.reload(wait_until="domcontentloaded")
    decline_btn = page1.locator("#cd-consent-decline")
    check("Decline button is visible", decline_btn.is_visible())
    decline_btn.click()

    # Wait long enough for any pending GA hit to fire (GA4 sends within ~2 s)
    page1.wait_for_timeout(3000)

    check(
        "No GA collect requests sent after Decline",
        len(ga_requests_after_decline) == 0,
        f"intercepted: {ga_requests_after_decline}" if ga_requests_after_decline else "none intercepted ✓",
    )

    # Also verify consent state in the dataLayer
    consent_state = page1.evaluate("""
        () => {
            // Walk dataLayer looking for the most recent consent update
            var dl = window.dataLayer || [];
            for (var i = dl.length - 1; i >= 0; i--) {
                var entry = dl[i];
                if (entry[0] === 'consent' && entry[1] === 'update') {
                    return entry[2];
                }
            }
            return null;
        }
    """)
    print(f"       dataLayer consent update entry: {consent_state}")
    check(
        "dataLayer consent update sets analytics_storage to 'denied'",
        consent_state is not None and consent_state.get("analytics_storage") == "denied",
        str(consent_state),
    )
    check(
        "dataLayer consent update keeps ad_storage 'denied'",
        consent_state is not None and consent_state.get("ad_storage") == "denied",
        str(consent_state),
    )

    ctx1.close()

    # ── TEST 2: ACCEPT → consent update sets analytics_storage granted ────────
    print(f"\n{INFO}  TEST 2 — Accept should set analytics_storage to 'granted' in dataLayer")

    ctx2 = browser.new_context()
    page2 = ctx2.new_page()
    page2.goto(BASE_URL, wait_until="domcontentloaded")
    page2.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page2.reload(wait_until="domcontentloaded")

    accept_btn = page2.locator("#cd-consent-accept")
    check("Accept button is visible", accept_btn.is_visible())
    accept_btn.click()
    page2.wait_for_timeout(1000)

    consent_state_accept = page2.evaluate("""
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
    """)
    print(f"       dataLayer consent update entry: {consent_state_accept}")
    check(
        "dataLayer consent update sets analytics_storage to 'granted'",
        consent_state_accept is not None and consent_state_accept.get("analytics_storage") == "granted",
        str(consent_state_accept),
    )
    check(
        "dataLayer consent update keeps ad_storage 'denied' even after Accept",
        consent_state_accept is not None and consent_state_accept.get("ad_storage") == "denied",
        str(consent_state_accept),
    )

    ctx2.close()

    # ── TEST 3: Page load with stored 'denied' — gtag default stays denied ────
    print(f"\n{INFO}  TEST 3 — Page reload with stored 'denied' should not fire collect requests")

    ctx3 = browser.new_context()
    page3 = ctx3.new_page()
    page3.goto(BASE_URL, wait_until="domcontentloaded")
    page3.evaluate(f"localStorage.setItem('{STORAGE_KEY}', 'denied')")

    ga_on_reload = []
    page3.on("request", lambda req: ga_on_reload.append(req.url)
             if is_ga_collect(req.url) else None)

    page3.reload(wait_until="domcontentloaded")
    page3.wait_for_timeout(3000)

    check(
        "No GA collect requests on reload when consent is stored as 'denied'",
        len(ga_on_reload) == 0,
        f"intercepted: {ga_on_reload}" if ga_on_reload else "none intercepted ✓",
    )

    ctx3.close()
    browser.close()

# ── Summary ───────────────────────────────────────────────────────────────────
print()
passed = sum(1 for _, ok in results if ok)
failed = sum(1 for _, ok in results if not ok)
total  = passed + failed
print(f"Results: {PASS} {passed}/{total} passed  {FAIL} {failed}/{total} failed\n")
sys.exit(0 if failed == 0 else 1)

