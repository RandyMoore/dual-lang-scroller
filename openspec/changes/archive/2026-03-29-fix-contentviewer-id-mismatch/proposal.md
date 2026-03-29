## Why

The content viewer incorrectly displays content from the first item in the API response instead of the specific content item corresponding to the clicked item's ID. This causes users to see mismatched content when navigating to specific content items.

## What Changes

- Modify `ContentViewer.vue` to filter content items by ID before displaying
- Add error handling for when a content item is not found
- Ensure the displayed content matches the clicked item's ID

## Capabilities

### New Capabilities
None

### Modified Capabilities
- **content-viewer**: The content viewer now correctly displays the specific content item based on the URL parameter ID instead of always showing the first item.

## Impact

- **src/views/ContentViewer.vue**: Modified to filter content by ID and handle missing content items
- **User Experience**: Users will now see the correct content when clicking on specific items from the landing page