// Google tag (gtag.js) - Consent Mode v2 bootstrap.
// Loaded synchronously in <head> before any analytics interaction so that
// default-deny state is set before the GA script can fire. The GA script
// itself is only injected when prior consent has been granted; otherwise
// consent.js handles the banner and injects gtag on Accept.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage':  'denied',
  'ad_storage':         'denied',
  'ad_user_data':       'denied',
  'ad_personalization': 'denied'
});
if (localStorage.getItem('cd_cookie_consent') === 'granted') {
  gtag('consent', 'update', {
    'analytics_storage':  'granted',
    'ad_storage':         'denied',
    'ad_user_data':       'denied',
    'ad_personalization': 'denied'
  });
  (function () {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-F0S5RNZGD5';
    document.head.appendChild(s);
  })();
  gtag('js', new Date());
  gtag('config', 'G-F0S5RNZGD5');
}
