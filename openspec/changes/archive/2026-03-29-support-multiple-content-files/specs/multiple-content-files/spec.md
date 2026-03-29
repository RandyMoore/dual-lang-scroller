## ADDED Requirements

### Requirement: Multiple content files support
The system SHALL support serving multiple bilingual content files simultaneously.

#### Scenario: API returns array of all content files
- **WHEN** user requests the content list endpoint
- **THEN** the server returns JSON with an array of all available content items
- **AND** each item includes `id`, `en`, and `es` properties

#### Scenario: Landing page displays all content items
- **WHEN** the landing page loads
- **THEN** it displays all available content items from the API response
- **AND** each item is clickable and navigates to the content viewer

#### Scenario: Content viewer loads specific content by ID
- **WHEN** user clicks on a content item on the landing page
- **THEN** the content viewer loads the specific content item by its ID
- **AND** displays both English and Spanish versions

#### Scenario: Incomplete file pairs are skipped
- **WHEN** a content file has a matching English version but no Spanish version
- **THEN** the API skips that file and does not include it in the response
- **AND** the landing page does not display the incomplete content