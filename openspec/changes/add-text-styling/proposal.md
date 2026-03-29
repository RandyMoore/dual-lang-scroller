## Why

The specification states "Styling: Unstyled text (plain text)" and "No scroll bars visible, Paragraphs synchronized vertically, Scroll position matches between both frames, Top of highest visible paragraph aligns in both frames." These specific behaviors need explicit specification.

## Dependencies
- add-scroll-behavior - Scroll behavior requirements are foundational

## Priority
- High

## Order
- 4

## What Changes

### ADDED Requirements
- Add `add-text-styling` change for unstyled text display and scroll behavior

**Capabilities Affected:**
- **content-viewer**: New requirement for unstyled plain text display, hidden scrollbars, paragraph synchronization, scroll position matching, top paragraph alignment
