## Context

The dual-language scroller application displays bilingual content for comparison. The landing page was recently updated to display English first and Spanish second. However, the content viewer component still displays English in the top frame and Spanish in the bottom frame, creating an inconsistency in the user experience.

Current state:
- Landing page: English first, Spanish second
- Content viewer: English top, Spanish bottom

## Goals / Non-Goals

**Goals:**
- Ensure consistent language order across the entire application
- Update content viewer to display Spanish in the top frame and English in the bottom frame
- Maintain scroll synchronization functionality

**Non-Goals:**
- Changing the landing page language order (already completed)
- Modifying content loading or API calls
- Changing scroll synchronization behavior
- Adding new features or capabilities

## Decisions

**Decision 1: Swap LanguageFrame Component Order**
- **Choice**: Change the order of LanguageFrame components in ContentViewer.vue template
- **Rationale**: This is the simplest and most direct approach to achieve the desired layout
- **Alternatives considered**: 
  - Creating a new wrapper component with fixed order (over-engineering)
  - Using CSS flexbox with fixed positioning (more complex, unnecessary)
  - Reordering content data (would require changes to API and loading logic)

**Decision 2: Maintain Content Binding Order**
- **Choice**: Keep content binding as-is (contentA for Spanish, contentB for English)
- **Rationale**: This ensures the correct content is displayed in each frame after reordering
- **Alternatives considered**: Swapping content binding (would require additional changes)

**Decision 3: Preserve Scroll Synchronization**
- **Choice**: Keep existing scroll synchronization logic unchanged
- **Rationale**: The synchronization mechanism works independently of language order
- **Alternatives considered**: Rewriting scroll sync (unnecessary complexity)

## Risks / Trade-offs

**Risk 1: User confusion due to inconsistent language order**
- **Mitigation**: This change resolves the inconsistency, so this risk is eliminated

**Risk 2: Breaking existing user workflows**
- **Mitigation**: This is a UI layout change only, no functional changes to user workflows

**Trade-off**: Minimal code change vs. potential for future inconsistencies
- **Mitigation**: Document the language order convention clearly in code comments

## Migration Plan

1. Update ContentViewer.vue template to swap LanguageFrame order
2. Verify content bindings remain correct
3. Test content viewer to confirm Spanish appears in top frame
4. Test scroll synchronization functionality
5. Verify consistency with landing page language order