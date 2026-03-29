## Context

The archived change (2026-03-29-update-content-api-return-full-content) successfully modified the content API to return full content for the content viewer. However, this change inadvertently caused the landing page to display full content instead of just the first line (title). The landing page should function as a preview/selection interface, showing only the first line of each content item as a title, while the content viewer at `/viewer/<id>` displays the full content.

Current state:
- Content API returns full content (all paragraphs) for both English and Spanish
- LandingPage.vue displays full content from API response
- ContentViewer.vue correctly receives and displays full content

## Goals / Non-Goals

**Goals:**
- Modify LandingPage.vue to display only the first line of content for each language
- Maintain full content display in ContentViewer.vue
- Ensure landing page serves as a clean preview/selection interface

**Non-Goals:**
- Modifying the content API (already returns full content correctly)
- Changing content viewer behavior (already works correctly)
- Implementing pagination or filtering on landing page

## Decisions

**Content Extraction Method:**
- Use `content.split('\n')[0].trim()` to extract the first line
- This approach is simple, reliable, and handles content with/without trailing newlines
- Alternative considered: `content.match(/^[^\n]*/m)` - more complex regex, similar reliability
- Decision: Use string split method for simplicity and readability

**Storage Strategy:**
- Extract first line at display time in LandingPage.vue
- No need to modify API response or create separate data structures
- Keeps API unchanged and maintains single source of truth

**Content Viewer Unchanged:**
- ContentViewer.vue continues to receive full content from API
- No changes needed to viewer component or API handler
- This maintains the correct behavior established by the archived change

## Risks / Trade-offs

**Risk: Empty or whitespace-only first line**
- If content file is empty or only contains whitespace, display may show blank text
- Mitigation: The content files in this project are expected to have valid titles
- Acceptable trade-off: Low risk given project structure

**Risk: Content with leading/trailing whitespace**
- `trim()` handles this, but could theoretically remove intentional whitespace
- Mitigation: Unlikely in this use case (titles typically don't have leading/trailing spaces)
- Acceptable trade-off: Minimal impact

**Trade-off: Simple vs. Robust**
- Simple string split is easy to understand and maintain
- More robust alternatives (regex, line-by-line parsing) add complexity without significant benefit
- Decision: Prioritize simplicity for this UI-focused change

## Migration Plan

**Deployment Steps:**
1. Update LandingPage.vue component
2. Test landing page displays only first line
3. Verify content viewer still shows full content
4. Run unit tests for content extraction logic
5. Run e2e tests for landing page and content viewer

**Rollback Strategy:**
- If issues arise, revert LandingPage.vue changes
- The content API and ContentViewer.vue remain unchanged
- Simple git revert of the single component file

**No Database or Configuration Changes:**
- No migration needed for data or configuration
- No service restarts required
- Changes are purely in the frontend component