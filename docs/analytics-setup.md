# Google Analytics Setup

This project includes Google Analytics 4 (GA4) integration for tracking website usage and user interactions.

## Setup Instructions

1. **Get your Google Analytics 4 Measurement ID:**

   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use an existing one
   - Find your Measurement ID (it looks like `G-XXXXXXXXXX`)

2. **Configure Environment Variables:**
   Create a `.env.local` file in your project root and add:

   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

   Replace `G-XXXXXXXXXX` with your actual Measurement ID.

3. **The analytics will automatically start tracking:**
   - Page views
   - User sessions
   - Basic user interactions

## Usage

### Track Custom Events

Use the `useAnalytics` hook in your components:

```tsx
import { useAnalytics } from "@/hooks/useAnalytics";

function MyComponent() {
  const { trackButtonClick, trackBlogInteraction } = useAnalytics();

  const handleButtonClick = () => {
    trackButtonClick("Download Guide", "Homepage");
    // Your button logic here
  };

  const handleBlogRead = (slug: string) => {
    trackBlogInteraction("article_read", slug);
    // Your blog logic here
  };

  return <button onClick={handleButtonClick}>Download Guide</button>;
}
```

### Available Tracking Methods

- `trackEvent(action, category, label?, value?)` - Generic event tracking
- `trackButtonClick(buttonName, location?)` - Button click tracking
- `trackPageEvent(eventName, pageName)` - Page-specific events
- `trackBlogInteraction(action, articleSlug)` - Blog-related events

## Privacy Considerations

- Analytics only loads when the environment variable is set
- No personal data is collected without user consent
- Consider adding a cookie consent banner for GDPR compliance

## Debugging

To test if analytics is working:

1. Open your browser's developer tools
2. Go to the Network tab
3. Look for requests to `googletagmanager.com`
4. Check the Google Analytics Real-time reports
