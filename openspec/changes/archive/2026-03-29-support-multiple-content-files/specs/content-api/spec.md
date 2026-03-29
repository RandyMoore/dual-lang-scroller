## MODIFIED Requirements

### Requirement: Content List Endpoint
The system SHALL provide an API endpoint that returns a list of all available content items.

#### Scenario: GET /api/content returns full content array
- **WHEN** user requests the content list endpoint
- **THEN** the server returns JSON with an array of all available content items
- **AND** each item includes language identifiers and file paths

#### Scenario: GET /api/content returns single content item
- **WHEN** user requests a specific content item by ID
- **THEN** the server returns JSON with both language versions (en and es)
- **AND** the response includes the complete text content, not truncated

### Requirement: Content File Validation
The system SHALL validate that required content files exist before serving.

#### Scenario: Missing content files return 404
- **WHEN** a requested content file does not exist
- **THEN** the server returns HTTP 404 Not Found
- **AND** includes an error message describing the issue

#### Scenario: Incomplete file pairs are skipped
- **WHEN** a content file has a matching English version but no Spanish version
- **THEN** the API skips that file and does not include it in the response
- **AND** the landing page does not display the incomplete content