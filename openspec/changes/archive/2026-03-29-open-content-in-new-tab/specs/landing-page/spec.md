# Landing Page Capability - Delta Spec

This is a delta specification for the landing page capability, modifying the navigation behavior when clicking on content items.

## Purpose

The landing page provides a clean, minimal interface for users to browse and select from all available bilingual content items before viewing them in the content viewer.

## Requirements

### Requirement: Content List Display
The system SHALL display a list of all available content items on the landing page.

#### Scenario: Landing shows content list
- **WHEN** user first navigates to the application
- **THEN** the landing page displays a list of all available content items
- **AND** each item shows an identifier (title or name) in both languages

### Requirement: Navigation to Content Viewer
The system SHALL navigate users from the landing page to the content viewer upon selection.

#### Scenario: Click navigates to viewer
- **WHEN** user clicks on a content item
- **THEN** the application navigates to the content viewer
- **AND** displays that specific content for viewing

#### Scenario: Click opens content in new tab
- **WHEN** user clicks on a content item
- **THEN** the application opens the content viewer in a new browser tab
- **AND** the landing page remains visible in the original tab

### Requirement: Content Preview Limitation
The system SHALL display only the first line (title) of content on the landing page, not the full content.

#### Scenario: Landing shows only first line
- **WHEN** user first navigates to the application
- **THEN** the landing page displays only the first line of content for each language
- **AND** the content viewer displays the full content when navigating to `/viewer/<id>`

### Requirement: Language Order Display
The system SHALL display Spanish content first and English content second on the landing page.

#### Scenario: Landing shows Spanish first, English second
- **WHEN** user first navigates to the application
- **THEN** the landing page displays Spanish content before English content