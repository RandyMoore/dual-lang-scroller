## Context

The application currently uses Vue Router for navigation. When users click on a content item in the landing page, it navigates to the content viewer in the same tab using `router.push()`. The landing page displays a list of content items with their titles in both Spanish and English, and the content viewer displays the full content when navigating to `/viewer/<id>`.

## Goals / Non-Goals

**Goals:**
- Enable content items to open in a new tab when clicked
- Maintain all existing landing page functionality (content list display, language order, etc.)
- Preserve the content viewer's ability to display content correctly in a new tab

**Non-Goals:**
- Changing the content viewer's internal navigation behavior
- Modifying the content API or data fetching logic
- Changing the landing page's content list display or language order
- Implementing any new features beyond new-tab navigation

## Decisions

**Decision 1: Use `target="_blank"` and `rel="noopener noreferrer"` on links**
- **Rationale**: This is the standard way to open links in new tabs while maintaining security. The `target="_blank"` attribute opens the link in a new browser tab/window. The `rel="noopener noreferrer"` attribute prevents the new page from having access to the original page's window object, which is a security best practice.
- **Alternative considered**: Using `window.open()` with JavaScript. This approach is more flexible but requires more code and can be blocked by popup blockers. The HTML `target` attribute is simpler and more declarative.

**Decision 2: Keep `router.push()` for internal navigation**
- **Rationale**: The content viewer component itself may need to navigate internally (e.g., if we add back navigation or other internal links in the future). By keeping `router.push()` for internal navigation and using `target="_blank"` only for the landing page links, we maintain flexibility for future changes.
- **Alternative considered**: Using `window.open()` for all navigation. This would require more complex logic to distinguish between internal and external navigation.

**Decision 3: No changes to content viewer component**
- **Rationale**: The content viewer is designed to work when navigated to via URL. Opening it in a new tab doesn't require any changes to its internal logic, as it will receive the correct URL parameter and load the appropriate content.

## Risks / Trade-offs

**Risk 1: Browser popup blockers may block new tabs**
- **Mitigation**: The `target="_blank"` attribute is generally not blocked by popup blockers, as it's a standard HTML behavior. However, if users have aggressive popup blockers enabled, they may need to manually allow popups for the site.

**Risk 2: Users may lose context if they don't know how to navigate back**
- **Mitigation**: Users can manually close tabs or use the browser's back button to return to the landing page. The landing page remains accessible in the original tab.

**Trade-off: New tab navigation vs. same tab navigation**
- **Advantage**: Users can keep the landing page open as a reference while viewing content, or open multiple content items for comparison without losing their place.
- **Disadvantage**: Users may need to manually close multiple tabs, and the browser's back button behavior may be less intuitive if they're used to same-tab navigation.

## Migration Plan

1. Update the LandingPage component to add `target="_blank"` and `rel="noopener noreferrer"` to the content item div
2. Test that clicking on content items opens them in a new tab
3. Verify that the content viewer displays correctly in the new tab
4. Verify that all existing landing page functionality remains intact

**Rollback Strategy**: If issues arise, simply remove the `target` and `rel` attributes from the content item div to revert to same-tab navigation.