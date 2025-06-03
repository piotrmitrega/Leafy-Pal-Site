import { useCallback } from "react";
import * as gtag from "@/lib/gtag";

export const useAnalytics = () => {
  const trackEvent = useCallback(
    (action: string, category: string, label?: string, value?: number) => {
      gtag.event({
        action,
        category,
        label,
        value,
      });
    },
    []
  );

  const trackButtonClick = useCallback(
    (buttonName: string, location?: string) => {
      trackEvent(
        "click",
        "engagement",
        `${buttonName}${location ? ` - ${location}` : ""}`
      );
    },
    [trackEvent]
  );

  const trackPageEvent = useCallback(
    (eventName: string, pageName: string) => {
      trackEvent(eventName, "page_interaction", pageName);
    },
    [trackEvent]
  );

  const trackBlogInteraction = useCallback(
    (action: string, articleSlug: string) => {
      trackEvent(action, "blog", articleSlug);
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackButtonClick,
    trackPageEvent,
    trackBlogInteraction,
  };
};
