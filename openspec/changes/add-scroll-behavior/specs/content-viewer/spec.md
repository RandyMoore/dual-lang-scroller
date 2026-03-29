## ADDED Requirements

### Requirement: Hidden Scrollbars with Functional Scrolling
The system SHALL hide scrollbars visually while preserving full scrolling functionality.

#### Scenario: Scrollbars hidden from view
- **WHEN** user views the content frame
- **THEN** scrollbars are not visible to the user

#### Scenario: Scrolling remains functional
- **WHEN** content overflows beyond viewport
- **THEN** scrolling works via mouse wheel, trackpad, or touch gestures

### Requirement: Paragraph Alignment
The system SHALL align paragraphs vertically between frames and align top of highest visible paragraph in both frames.

#### Scenario: Paragraph boundaries align vertically
- **WHEN** user scrolls content
- **THEN** paragraph boundaries align vertically between both frames

#### Scenario: Top paragraph alignment
- **WHEN** user scrolls content
- **THEN** top of highest visible paragraph aligns in both frames
