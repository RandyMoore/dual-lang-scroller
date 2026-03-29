## 1. API Implementation

- [x] 1.1 Modify `src/api/content.ts` to return full content instead of first line
- [x] 1.2 Update ContentResponse interface to include full content strings
- [x] 1.3 Verify API endpoint returns complete content for English and Spanish

## 2. Language Frame Layout

- [x] 2.1 Update ContentViewer.vue to display Spanish in top frame and English in bottom frame
- [x] 2.2 Verify both frames display correct language content
- [x] 2.3 Verify scroll synchronization works with correct language layout

## 3. Content Viewer Verification

- [x] 3.1 Navigate to content viewer with valid content ID
- [x] 3.2 Verify both frames display full content text
- [x] 3.3 Verify scroll synchronization works with full content

## 4. Testing

- [x] 4.1 Run unit tests for content API
- [x] 4.2 Run end-to-end tests for content viewer
- [x] 4.3 Verify no regressions in existing functionality

## 5. Documentation

- [x] 5.1 Update `specs/content-display/spec.md` with new requirements
- [x] 5.2 Validate change with `openspec validate update-content-api-return-full-content --strict`
