## Why

The specification states "Scroll bars are hidden but functionality is preserved" and "Paragraph boundaries must align vertically" and "Top of highest visible paragraph aligns in both frames." These specific behaviors need explicit specification.

## Dependencies
- None - This is a core viewer behavior

## Priority
- High

## Order
- 3

## What Changes

### ADDED Requirements
- Add `add-scroll-behavior` change for scrollbar hiding and paragraph alignment

**Capabilities Affected:**
- **content-viewer**: New requirement for hidden scrollbars with functional scrolling, vertical paragraph boundary alignment, top paragraph alignment in both frames
