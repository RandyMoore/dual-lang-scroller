## ADDED Requirements

### Requirement: Language Frame Layout
The system SHALL display Spanish (es) content in the top frame and English (en) content in the bottom frame of the content viewer.

#### Scenario: Spanish in top frame
- **WHEN** user navigates to the content viewer
- **THEN** the top frame displays Spanish (es) content

#### Scenario: English in bottom frame
- **WHEN** user navigates to the content viewer
- **THEN** the bottom frame displays English (en) content

### Requirement: Full Content Display
The system SHALL provide complete text content for both languages in the content viewer frames, allowing users to view the full text without truncation.

#### Scenario: Content viewer displays full text
- **WHEN** user navigates to the content viewer with a valid content ID
- **THEN** both frames display the complete text content for English and Spanish languages

#### Scenario: Content includes all paragraphs
- **WHEN** content is loaded from the API endpoint
- **THEN** the returned content includes all paragraphs from the content file, not just the first line

#### Scenario: Content text is unstyled
- **WHEN** content is displayed in the viewer frames
- **THEN** the text is presented as plain text without HTML or markdown formatting

#### Scenario: API returns complete content
- **WHEN** the `/api/content` endpoint is called
- **THEN** the response includes the complete content for both English and Spanish languages, including all paragraphs and whitespace

#### Scenario: Content trimming
- **WHEN** content is read from files
- **THEN** leading and trailing whitespace is removed from the content strings
