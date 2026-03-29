## Why

The content viewer currently displays blank content because the API endpoint returns only the first line (title) of content files instead of the full content. Users cannot view the actual text content in the viewer, breaking the core functionality of the application.

## Dependencies
- None - This is a foundational bug fix

## Priority
- Critical

## Order
- 0

## What Changes

- Modify `src/api/content.ts` to return the complete content file content (all paragraphs) instead of just the first line
- Change from returning `content.split('\n')[0].trim()` to returning `content.trim()` for both English and Spanish content
- Update the ContentResponse interface to include full content strings instead of just the first line

## Capabilities

### New Capabilities
- content-display: The system SHALL provide full content text for viewing in the content viewer frames and display Spanish in the top frame and English in the bottom frame

### Modified Capabilities
- (None - no existing specs to modify)

## Impact

- Affected code: `src/api/content.ts` (1 line change)
- Affected specs: `specs/content-display/spec.md` (new spec)
- No breaking changes
- No new dependencies
- No architectural shifts