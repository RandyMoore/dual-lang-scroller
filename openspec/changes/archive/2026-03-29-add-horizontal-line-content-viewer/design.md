## Context

The Content Viewer currently displays two LanguageFrame components stacked vertically without visual separation. The frames use a flexbox layout with `flex-direction: column` to stack them. The implementation is in `src/views/ContentViewer.vue` and relies on the LanguageFrame component from `src/components/LanguageFrame.vue`.

## Goals / Non-Goals

**Goals:**
- Add a horizontal line separator between the top and bottom frames
- Maintain existing scroll synchronization functionality
- Keep the implementation simple and maintainable

**Non-Goals:**
- Not adding a new component for the separator
- Not changing the frame layout or scrolling behavior
- Not adding any new dependencies

## Decisions

**Decision: Use CSS border on the LanguageFrame component**
- **Rationale**: The LanguageFrame component already exists and is responsible for rendering individual frames. Adding a bottom border to this component is the simplest approach that doesn't require modifying the parent container or creating new components.
- **Alternative considered**: Add a separate div between the frames in the template. This would require additional markup and CSS, making the template more complex.

**Decision: Use subtle styling for the separator**
- **Rationale**: The separator should be visually distinct but not distracting. A thin, light-colored border (e.g., `#e0e0e0`) provides good separation without overwhelming the content.
- **Alternative considered**: A thicker or more prominent line. This would be less elegant and could distract from the content.

## Risks / Trade-offs

- **Risk**: Border may not be visible on all backgrounds
  - **Mitigation**: Use a light gray color that contrasts well with white backgrounds

- **Trade-off**: Adding a border adds a small amount of visual weight to the interface
  - **Mitigation**: Keep the border thin and subtle to minimize visual impact