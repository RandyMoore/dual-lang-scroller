## MODIFIED Requirements

### Requirement: Frame Layout Configuration
The system SHALL display two frames in a vertical layout when viewing content.

#### Scenario: English frame positioned above Spanish frame
- **WHEN** user navigates to the content viewer
- **THEN** the top frame displays English (en) content
- **AND** the bottom frame displays Spanish (es) content

### Requirement: Scroll Synchronization
The system SHALL maintain synchronized scrolling between frames in real-time.

#### Scenario: Vertical scroll sync
- **WHEN** user scrolls either frame
- **THEN** both frames scroll together maintaining identical vertical position
- **AND** horizontal position is also synchronized

#### Scenario: Horizontal scroll sync
- **WHEN** content overflows horizontally
- **THEN** both frames maintain the same horizontal scroll position