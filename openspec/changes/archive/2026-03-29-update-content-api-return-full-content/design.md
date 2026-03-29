## Context

The application currently uses a Vite plugin to serve content files via a custom API endpoint. The API endpoint `/api/content/:id` returns content data to the ContentViewer component. However, the API only returns the first line of each content file (the title), causing the content viewer to display blank content.

## Goals / Non-Goals

**Goals:**
- Enable users to view full content text in the content viewer frames
- Maintain the existing API endpoint structure and routing
- Preserve the plain text content format (no HTML/markdown)
- Keep the content viewer's scroll synchronization functionality intact

**Non-Goals:**
- Changing the content file format (plain text remains)
- Modifying the content viewer UI or layout
- Adding new content management features
- Implementing content filtering or search
- Changing the API endpoint URL or method

## Decisions

**Decision: Return full content instead of first line**
- **Rationale**: The specification requires "Language A text content" and "Language B text content" to be displayed in the viewer. Currently only the title is returned, which is insufficient for viewing the actual content.
- **Alternatives considered**: 
  - Option 1: Return all paragraphs as separate strings in an array
  - Option 2: Return the entire file content as a single string
  - Option 3: Return a subset of content (e.g., first 10 paragraphs)
  - **Chosen**: Option 2 (return entire file content as a single string) because it's simplest, matches the specification's "text content" requirement, and preserves the plain text format without needing array parsing.

**Decision: Use `content.trim()` instead of `content.split('\n')[0].trim()`**
- **Rationale**: This removes leading/trailing whitespace from the entire content file, ensuring clean text display without extra whitespace at the beginning or end.
- **Alternatives considered**: 
  - Option 1: Keep the first line only (current behavior)
  - Option 2: Return content with newlines preserved
  - Option 3: Return content with whitespace trimmed per paragraph
  - **Chosen**: Option 2 (trim entire content) because it's the simplest change and ensures clean text without extra whitespace.

## Risks / Trade-offs

**Risk: Large content files may be slow to load**
- **Mitigation**: The content files are currently small (titles + short paragraphs), so performance impact is negligible. If content files grow significantly, consider implementing pagination or chunking.

**Trade-off: Full content may be longer than expected**
- **Mitigation**: The specification allows for "Metadata (optional)" and doesn't specify content length limits. The current implementation handles full content as a single string, which works for typical reading content.

## Migration Plan

1. Modify `src/api/content.ts` to change the content extraction logic
2. Update the ContentResponse interface to reflect full content strings
3. Verify content viewer displays full content when navigating to `/viewer/:id`
4. Run existing tests to ensure no regressions
5. Update `specs/content-display/spec.md` with new requirements