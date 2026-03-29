## Why

Users prefer to see English in the top frame and Spanish in the bottom frame for better readability and natural language flow when comparing translations side by side.

## What Changes

- Swap the language positions in the dual-language scroller interface
- Move English to the top frame and Spanish to the bottom frame
- **BREAKING**: This changes the default language order for the dual-language display

## Capabilities

### New Capabilities

None

### Modified Capabilities

- **content-viewer**: The language frame order in the content viewer will change from Spanish-top/English-bottom to English-top/Spanish-bottom
- **landing-page**: The language frame order on the landing page will change from Spanish-top/English-bottom to English-top/Spanish-bottom

## Impact

- Content viewer component language frame rendering
- Landing page component language frame rendering
- Any user configurations or preferences related to language order