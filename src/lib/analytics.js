// Send a GA4 event via the gtag snippet in index.html.
// No-ops when gtag is missing so the UI never depends on analytics loading.
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
};
