## Why

Currently, clicking on a content item in the landing page navigates to the content viewer in the same tab. Users may want to keep the landing page open as a reference while viewing content, or open multiple content items for comparison without losing their place on the landing page.

## What Changes

- Modify the navigation behavior when clicking on content items to open in a new tab
- Update the content viewer to handle new tab navigation gracefully
- Users can keep the landing page open as a reference while viewing content in a new tab

## Capabilities

### New Capabilities
None

### Modified Capabilities
- **landing-page**: The navigation behavior when clicking on content items will change from same-tab navigation to new-tab navigation, while maintaining all other landing page functionality.

## Impact

- **Landing Page Component**: Update click handlers to use `target="_blank"` and `rel="noopener noreferrer"`
- **ContentViewer Component**: Ensure it works correctly when opened in a new tab
- **User Experience**: Users can now keep the landing page open as a reference while viewing content in a new tab
