## Why
The archived change (2026-03-29-update-content-api-return-full-content) correctly modified the API to return full content for the content viewer. However, this change inadvertently caused the landing page to display full content instead of just the first line (title) for each language. The landing page should only show the first line of content as a preview/title, while the content viewer should show the full content.

## What Changes
### ADDED Requirements
- limit-landing-page-content - Modify landing page to display only the first line (title) of content instead of full content

**Capabilities Affected:**
- landing-page: The system SHALL display only the first line of content (title) on the landing page for each language, not the full content

## Dependencies
- 2026-03-29-update-content-api-return-full-content - This change depends on the content API returning full content for the viewer

## Priority
- High

## Order
- 1

## Impact
- **Affected specs**: specs/landing-page/spec.md (MODIFIED - new requirement)
- **Code impact**: minimal - Modify LandingPage.vue to extract and display only the first line of content
- **Breaking changes**: no