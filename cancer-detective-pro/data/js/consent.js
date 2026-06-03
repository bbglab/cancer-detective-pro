/**
 * Cookie Consent Manager — Google Consent Mode v2
 * Reads prior consent from localStorage and shows a banner if no decision has been made.
 *
 * GA loading strategy
 * -------------------
 * The gtag.js script is intentionally NOT included as a static <script> tag.
 * It is only injected into the DOM when the user grants consent (either now or
 * on a previous visit).  This guarantees that zero requests reach Google's
 * servers when the user has declined or has not yet decided.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'cd_cookie_consent'; // 'granted' | 'denied'
  var GA_ID       = 'G-F0S5RNZGD5';

  /* ── Language detection ─────────────────────────────────────────── */
  function detectLang() {
    var lang = (document.documentElement.lang || '').toLowerCase();
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('en')) return 'en';
    return 'ca'; // default: Catalan (ca-ES)
  }

  var STRINGS = {
    ca: {
      message: 'Utilitzem galetes analítiques per millorar el lloc web. Podeu acceptar-les o rebutjar-les.',
      accept:  'Acceptar',
      decline: 'Rebutjar'
    },
    es: {
      message: 'Usamos cookies analíticas para mejorar el sitio web. Puedes aceptarlas o rechazarlas.',
      accept:  'Aceptar',
      decline: 'Rechazar'
    },
    en: {
      message: 'We use analytics cookies to improve the website. You can accept or decline them.',
      accept:  'Accept',
      decline: 'Decline'
    }
  };

  /* ── GA loader (called only on Accept) ─────────────────────────── */
  function loadGtag() {
    // Avoid injecting the script twice
    if (document.querySelector('script[src*="googletagmanager.com/gtag"]')) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    // gtag() is already defined by the inline snippet in every HTML page
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  /* ── Consent helpers ────────────────────────────────────────────── */
  function grantConsent() {
    // Update consent state BEFORE loading the script so the first hit
    // is already tagged as granted.
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        analytics_storage:   'granted',
        ad_storage:          'denied',
        ad_user_data:        'denied',
        ad_personalization:  'denied'
      });
    }
    loadGtag();
  }

  function denyConsent() {
    // GA script is never loaded for denied users, so gtag may not exist.
    // Call it only when it is available (e.g. user went Accept → page reload
    // → somehow ends up here, which should not happen, but be safe).
    if (typeof gtag === 'function') {
      console.log('Denying consent for analytics and ads.');
      gtag('consent', 'update', {
        analytics_storage:   'denied',
        ad_storage:          'denied',
        ad_user_data:        'denied',
        ad_personalization:  'denied'
      });
    }
  }

  /* ── Apply stored consent immediately (no banner needed) ────────── */
  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'granted') {
    grantConsent();
    return; // nothing else to do
  }
  if (stored === 'denied') {
    return; // stay denied, no banner
  }

  /* ── Build and show the consent banner ──────────────────────────── */
  var lang = detectLang();
  var t = STRINGS[lang] || STRINGS['en'];

  function buildBanner() {
    var banner = document.createElement('div');
    banner.id = 'cd-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-label', t.message);

    banner.innerHTML =
      '<div class="cd-consent-inner">' +
        '<p class="cd-consent-text">' + t.message + '</p>' +
        '<div class="cd-consent-buttons">' +
          '<button id="cd-consent-accept" class="cd-btn cd-btn-accept">' + t.accept + '</button>' +
          '<button id="cd-consent-decline" class="cd-btn cd-btn-decline">' + t.decline + '</button>' +
        '</div>' +
      '</div>';

    return banner;
  }

  function hideBanner(banner) {
    banner.classList.add('cd-consent-hidden');
    // Remove from DOM after transition
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 400);
  }

  function init() {
    var banner = buildBanner();
    document.body.appendChild(banner);

    document.getElementById('cd-consent-accept').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'granted');
      grantConsent();
      hideBanner(banner);
    });

    document.getElementById('cd-consent-decline').addEventListener('click', function () {

      localStorage.setItem(STORAGE_KEY, 'denied');
      denyConsent();
      hideBanner(banner);
    });
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

