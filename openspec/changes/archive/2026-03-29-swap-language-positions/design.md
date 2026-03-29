## Context

The dual-lang-scroller application currently displays Spanish content in the top frame and English content in the bottom frame when viewing content. This is the default behavior in both the content viewer and landing page components.

## Goals / Non-Goals

**Goals:**
- Swap the language positions to display English in the top frame and Spanish in the bottom frame
- Maintain synchronized scrolling functionality
- Ensure the change applies consistently across all components

**Non-Goals:**
- Adding user-configurable language order preferences
- Modifying content display logic or translation quality
- Changing the content API or data structure

## Decisions

### Decision: Language Frame Order Configuration
**Choice:** Hardcode the language order as English-top/Spanish-bottom in the component templates

**Rationale:**
- Simplest approach with minimal code changes
- No need for additional state management or user preferences
- Consistent behavior across all components
- Reduces complexity and potential for bugs

**Alternatives Considered:**
- User-configurable language order: Would require state management and persistence, adding unnecessary complexity for a simple layout change
- Dynamic language switching: Would require more complex UI and state management

### Decision: Update Both Components
**Choice:** Apply the language swap to both ContentViewer.vue and LandingPage.vue components

**Rationale:**
- Both components display the dual-language frames
- Consistent user experience across the application
- Ensures the change is complete and doesn't create inconsistencies

**Alternatives Considered:**
- Only update ContentViewer.vue: Would leave LandingPage.vue with the old order, creating an inconsistent user experience

## Risks / Trade-offs

**Risk:** Users accustomed to the old language order may find the new order confusing
**Mitigation:** The change is a simple layout swap; users will quickly adapt to the new order

**Trade-off:** Hardcoded language order means users cannot customize the display
**Mitigation:** This is acceptable for the current scope; future iterations could add user preferences if needed

**Risk:** Breaking change for any existing users with saved preferences
**Mitigation:** No user preferences exist for language order in the current implementation