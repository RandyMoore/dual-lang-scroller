## Why

The existing swap-language-positions change only updated the landing page to display English first and Spanish second. However, the content viewer still displays English in the top frame and Spanish in the bottom frame. To maintain consistency across the entire application, the content viewer should also display Spanish in the top frame and English in the bottom frame.

## What Changes

- Swap the language positions in the content viewer component
- Move Spanish to the top frame and English to the bottom frame
- Ensure consistent language order across landing page and content viewer

## Capabilities

### New Capabilities

None

### Modified Capabilities

- **content-viewer**: The language frame order in the content viewer will change from English-top/Spanish-bottom to Spanish-top/English-bottom

## Impact

- Content viewer component language frame rendering
- Minimal code impact - requires changing the order of LanguageFrame components in ContentViewer.vue
- No breaking changes