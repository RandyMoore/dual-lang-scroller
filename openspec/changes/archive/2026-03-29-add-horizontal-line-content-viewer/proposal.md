## Why

The current Content Viewer displays two frames stacked vertically without visual separation, which can make it difficult to distinguish between the top and bottom frames when reading bilingual content. Adding a horizontal line between frames improves visual clarity and user experience.

## What Changes

- Add a horizontal line separator between the top and bottom frames in the Content Viewer
- The line should be visually distinct but not distracting
- Maintain existing frame layout and scrolling functionality

## Capabilities

### New Capabilities
- `frame-separator`: Visual separator component for content viewer frames

### Modified Capabilities
- `content-viewer`: Frame layout configuration now includes a separator line between frames

## Impact

- `src/views/ContentViewer.vue`: Add horizontal line component between language frames
- No API changes required
- No new dependencies
- No breaking changes