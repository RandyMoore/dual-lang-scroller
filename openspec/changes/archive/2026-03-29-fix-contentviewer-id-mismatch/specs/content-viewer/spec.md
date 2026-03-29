## MODIFIED Requirements

### Requirement: Frame Layout Configuration
The system SHALL display two frames in a vertical layout when viewing content.

#### Scenario: Spanish frame positioned above English frame
- **WHEN** user navigates to the content viewer
- **THEN** the top frame displays Spanish (es) content
- **AND** the bottom frame displays English (en) content

### Requirement: Scroll Synchronization
The system SHALL maintain synchronized scrolling between frames in real-time.

#### Scenario: Vertical scroll sync
- **WHEN** user scrolls either frame
- **THEN** both frames scroll together maintaining identical vertical position
- **AND** horizontal position is also synchronized

#### Scenario: Horizontal scroll sync
- **WHEN** content overflows horizontally
- **THEN** both frames maintain the same horizontal scroll position

### Requirement: Content Item Selection
The system SHALL display the specific content item corresponding to the URL parameter ID.

#### Scenario: Display correct content by ID
- **WHEN** user navigates to `/viewer/<id>`
- **THEN** the content viewer displays content for the item with matching ID
- **AND** the displayed content matches the content item clicked on the landing page

#### Scenario: Handle missing content item
- **WHEN** the content item with the specified ID is not found
- **THEN** the system logs an error message
- **AND** the content viewer displays an error notification