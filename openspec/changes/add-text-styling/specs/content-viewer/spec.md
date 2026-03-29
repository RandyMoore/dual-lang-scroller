## ADDED Requirements

### Requirement: Unstyled Text Display
The system SHALL display content as unstyled plain text without any HTML, markdown, or special formatting applied.

#### Scenario: Plain text rendering
- **WHEN** user views content in the viewer
- **THEN** all text displays as plain text without rich formatting
- **AND** no HTML tags are rendered visually (only displayed literally if present)

#### Scenario: No markdown interpretation
- **WHEN** source content contains markdown syntax
- **THEN** the markdown is displayed as literal characters, not interpreted
