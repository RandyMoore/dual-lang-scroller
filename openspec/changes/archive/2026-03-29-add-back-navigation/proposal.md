## Why

The specification requires "No buttons in the viewer" and "Default back action returns to landing page." This requirement needs explicit specification for browser back button behavior and absence of navigation controls.

## Dependencies
- None - This is a core viewer behavior

## Priority
- High

## Order
- 2

## What Changes

### ADDED Requirements
- Add `add-back-navigation` change for no buttons and default back behavior

**Capabilities Affected:**
- **content-viewer**: New requirement for no buttons and default back navigation returning to landing page
