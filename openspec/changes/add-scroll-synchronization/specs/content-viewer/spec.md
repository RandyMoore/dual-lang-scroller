## ADDED Requirements

### Requirement: Scroll Synchronization
The system SHALL maintain synchronized scrolling between viewer frames in real-time.

#### Scenario: Vertical scroll synchronization
- **WHEN** user scrolls either frame vertically
- **THEN** both frames update their vertical positions identically and immediately

#### Scenario: Horizontal scroll synchronization
- **WHEN** content overflows horizontally beyond visible area
- **THEN** both frames maintain identical horizontal scroll positions at all times
