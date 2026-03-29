## MODIFIED Requirements

### Requirement: Frame Layout Configuration
The system SHALL display two frames in a vertical layout when viewing content.

#### Scenario: Spanish frame positioned above English frame
- **WHEN** user navigates to the content viewer
- **THEN** the top frame displays Spanish (es) content
- **AND** the bottom frame displays English (en) content

#### Scenario: Horizontal line separator between frames
- **WHEN** user views content in the content viewer
- **THEN** a horizontal line separator is visible between the top and bottom frames
- **AND** the separator is thin and subtle (approximately 1px)
- **AND** the separator does not interfere with scrolling behavior

### Requirement: Scroll Synchronization
The system SHALL maintain synchronized scrolling between frames in real-time.

#### Scenario: Vertical scroll sync
- **WHEN** user scrolls either frame
- **THEN** both frames scroll together maintaining identical vertical position
- **AND** horizontal position is also synchronized

#### Scenario: Horizontal scroll sync
- **WHEN** content overflows horizontally
- **THEN** both frames maintain the same horizontal scroll position