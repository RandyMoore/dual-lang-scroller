ct r## 1. Modify ContentViewer Component

- [x] 1.1 Open src/views/ContentViewer.vue
- [x] 1.2 Locate the onMounted function where content is fetched
- [x] 1.3 Replace the content selection logic to use Array.find() with ID matching
- [x] 1.4 Add error handling for when content item is not found
- [x] 1.5 Test the fix by navigating to different content items

## 2. Verify Implementation

- [x] 2.1 Run the application and navigate to the landing page
- [x] 2.2 Click on different content items (e.g., "content", "example")
- [x] 2.3 Verify that the correct content is displayed for each item
- [x] 2.4 Test error handling by navigating to a non-existent content ID
- [x] 2.5 Run unit tests to ensure no regressions
- [x] 2.6 Add e2e tests to verify content viewer displays correct content for specific IDs
- [x] 2.7 Update e2e tests to verify correct content is loaded (not just non-empty)
- [x] 2.8 Run e2e tests to ensure no regression
