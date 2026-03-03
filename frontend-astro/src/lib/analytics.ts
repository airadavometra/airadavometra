import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "./firebase-client";

/**
 * Log a custom analytics event
 * @param eventName - Name of the event
 * @param eventParams - Additional event parameters
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>,
) => {
  const analytics = getFirebaseAnalytics();
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

/**
 * Track page view (automatically tracked by Firebase, but can be used for custom tracking)
 * @param pagePath - The page path
 * @param pageTitle - The page title
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });
};

/**
 * Track user engagement
 */
export const trackEngagement = () => {
  trackEvent("engagement");
};

/**
 * Track button click
 * @param buttonName - Name/identifier of the button
 * @param buttonLabel - Display label of the button
 */
export const trackButtonClick = (buttonName: string, buttonLabel?: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    button_label: buttonLabel,
  });
};

/**
 * Track form submission
 * @param formName - Name of the form
 */
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", {
    form_name: formName,
  });
};

/**
 * Track search
 * @param searchTerm - The search term
 */
export const trackSearch = (searchTerm: string) => {
  trackEvent("search", {
    search_term: searchTerm,
  });
};

/**
 * Track error
 * @param errorName - Name of the error
 * @param errorMessage - Error message
 */
export const trackError = (errorName: string, errorMessage?: string) => {
  trackEvent("error", {
    error_name: errorName,
    error_message: errorMessage,
  });
};
