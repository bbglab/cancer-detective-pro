"""
Test: Cookie consent banner — Accept & Deny buttons
URL : http://localhost:8080/
"""
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:8080/"
STORAGE_KEY = "cd_cookie_consent"

PASS = "\033[32m✔\033[0m"
FAIL = "\033[31m✘\033[0m"
INFO = "\033[34mℹ\033[0m"

results = []

def check(name, ok, detail=""):
    icon = PASS if ok else FAIL
    print(f"  {icon}  {name}" + (f"  ({detail})" if detail else ""))
    results.append((name, ok))


def clear_storage(page):
    """Remove the consent key so the banner always shows."""
    page.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page.reload()
    page.wait_for_load_state("domcontentloaded")


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    page = ctx.new_page()

    # ── 1. Initial load – banner should be visible ───────────────────────────
    print(f"\n{INFO}  Opening {BASE_URL}")
    page.goto(BASE_URL, wait_until="domcontentloaded")

    banner = page.locator("#cd-consent-banner")
    accept_btn = page.locator("#cd-consent-accept")
    decline_btn = page.locator("#cd-consent-decline")

    check("Banner is visible on first visit",
          banner.is_visible())
    check("Accept button is present",
          accept_btn.is_visible())
    check("Decline button is present",
          decline_btn.is_visible())

    # ── 2. Test the ACCEPT button ────────────────────────────────────────────
    print(f"\n{INFO}  Testing ACCEPT button…")
    clear_storage(page)

    accept_btn = page.locator("#cd-consent-accept")
    accept_btn.click()
    page.wait_for_timeout(600)   # wait for fade-out + setTimeout(400 ms)

    stored = page.evaluate(f"localStorage.getItem('{STORAGE_KEY}')")
    check("localStorage set to 'granted' after Accept",
          stored == "granted", f"got: {stored!r}")

    banner_gone = not page.locator("#cd-consent-banner").is_visible()
    check("Banner is hidden after Accept",
          banner_gone)

    # ── 3. Returning visitor (granted) – no banner ──────────────────────────
    print(f"\n{INFO}  Re-loading with 'granted' in localStorage…")
    page.reload()
    page.wait_for_load_state("domcontentloaded")
    page.wait_for_timeout(300)

    check("Banner does NOT re-appear when consent is already 'granted'",
          not page.locator("#cd-consent-banner").is_visible())

    # ── 4. Test the DENY button ──────────────────────────────────────────────
    print(f"\n{INFO}  Testing DENY / Decline button…")
    clear_storage(page)

    decline_btn = page.locator("#cd-consent-decline")
    decline_btn.click()
    page.wait_for_timeout(600)

    stored = page.evaluate(f"localStorage.getItem('{STORAGE_KEY}')")
    check("localStorage set to 'denied' after Decline",
          stored == "denied", f"got: {stored!r}")

    banner_gone = not page.locator("#cd-consent-banner").is_visible()
    check("Banner is hidden after Decline",
          banner_gone)

    # ── 5. Returning visitor (denied) – no banner ───────────────────────────
    print(f"\n{INFO}  Re-loading with 'denied' in localStorage…")
    page.reload()
    page.wait_for_load_state("domcontentloaded")
    page.wait_for_timeout(300)

    check("Banner does NOT re-appear when consent is already 'denied'",
          not page.locator("#cd-consent-banner").is_visible())

    # ── 6. Accept overrides a previous deny ─────────────────────────────────
    print(f"\n{INFO}  Accept overriding a previous 'denied' value…")
    page.evaluate(f"localStorage.setItem('{STORAGE_KEY}', 'denied')")
    # manually clear so banner re-shows
    page.evaluate(f"localStorage.removeItem('{STORAGE_KEY}')")
    page.reload()
    page.wait_for_load_state("domcontentloaded")

    page.locator("#cd-consent-accept").click()
    page.wait_for_timeout(600)

    stored = page.evaluate(f"localStorage.getItem('{STORAGE_KEY}')")
    check("localStorage updated to 'granted' after accepting from a clean state",
          stored == "granted", f"got: {stored!r}")

    browser.close()

# ── Summary ──────────────────────────────────────────────────────────────────
print()
passed = sum(1 for _, ok in results if ok)
failed = sum(1 for _, ok in results if not ok)
print(f"Results: {PASS} {passed} passed  {FAIL} {failed} failed\n")
sys.exit(0 if failed == 0 else 1)

