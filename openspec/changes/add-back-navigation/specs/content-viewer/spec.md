## ADDED Requirements

### Requirement: No Buttons and Default Back Navigation
The system SHALL display no buttons in the viewer and default back action returns to landing page.

#### Scenario: No buttons in viewer
- **WHEN** user views content in the viewer
- **THEN** no buttons or navigation controls are visible

#### Scenario: Default back navigation
- **WHEN** user uses browser back button
- **THEN** navigation returns to landing page
- **AND** no custom back button is provided
