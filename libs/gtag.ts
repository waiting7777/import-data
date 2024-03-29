export const GA_TRACKING_ID = "UA-33995800-3";

declare global {
  interface Window { gtag: any; }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, title: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: { action: string, category: string, label: string, value: string }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};