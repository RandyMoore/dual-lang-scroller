# Content API Capability

This capability defines the backend API endpoints that serve bilingual content to the frontend viewer.

## Purpose

The Content API provides programmatic access to all available bilingual content items, allowing the frontend to fetch and display them in the content viewer with proper validation and error handling.

## Requirements

### Requirement: Content List Endpoint
The system SHALL provide an API endpoint that returns a list of all available content items.

#### Scenario: GET /api/content returns full content array
- **WHEN** user requests the content list endpoint
- **THEN** the server returns JSON with complete content metadata
- **AND** each item includes language identifiers and file paths

### Requirement: Content Item Endpoint
The system SHALL provide an API endpoint that returns full content for a specific ID.

#### Scenario: GET /api/content/:id returns single content
- **WHEN** user requests a specific content item by ID
- **THEN** the server returns JSON with both language versions (en and es)
- **AND** the response includes the complete text content, not truncated

### Requirement: Content File Validation
The system SHALL validate that required content files exist before serving.

#### Scenario: Missing content files return 404
- **WHEN** a requested content file does not exist
- **THEN** the server returns HTTP 404 Not Found
- **AND** includes an error message describing the issue