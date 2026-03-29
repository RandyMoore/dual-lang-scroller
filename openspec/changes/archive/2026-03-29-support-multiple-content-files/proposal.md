## Why

The current content API only reads files named `content.txt`, preventing users from adding additional content files like `example.txt`. When new content files are created, they don't appear on the landing page, limiting the application's ability to showcase multiple content examples.

## What Changes

- Update the content API to read **all** `.txt` files from the content directory instead of just `content.txt`
- Return an **array** of content items instead of a single content item
- Update the landing page to display all available content items
- Update unit tests to handle multiple content items

## Capabilities

### New Capabilities
- `multiple-content-files`: Allows the application to serve and display multiple bilingual content files simultaneously

### Modified Capabilities
- `content-api`: The API now returns an array of content items instead of a single item, and validates that all `.txt` files have matching English and Spanish versions

## Impact

- `src/api/content.ts`: Update to iterate through all `.txt` files and return array
- `src/views/LandingPage.vue`: Update to handle array of content items
- `tests/unit/content.test.ts`: Update tests to expect multiple content items