## ADDED Requirements

### Requirement: Frame separator visual
The system SHALL display a horizontal line separator between frames in the content viewer to improve visual clarity.

#### Scenario: Separator appears between frames
- **WHEN** user views content in the content viewer
- **THEN** a horizontal line is visible between the top and bottom frames
- **AND** the line is thin and subtle (approximately 1px)

#### Scenario: Separator does not interfere with scrolling
- **WHEN** user scrolls either frame
- **THEN** the separator remains visible and stationary
- **AND** scrolling behavior is not affected by the separator