# Content Viewer Capability

This capability defines the core content viewer functionality that displays bilingual text with synchronized scrolling.

## Purpose

The content viewer provides a clean, distraction-free interface for reading and comparing bilingual content side-by-side with synchronized scrolling between frames.

## Requirements

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