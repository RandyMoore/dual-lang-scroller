## Context

The application uses a content API that returns an array of content items with IDs, English content, and Spanish content. The landing page displays these items, and clicking one navigates to `/viewer/<id>`. However, the ContentViewer component was always displaying the first item from the API response instead of filtering by the ID from the URL parameter.

## Goals / Non-Goals

**Goals:**
- Fix the ContentViewer to display the correct content item based on the URL parameter ID
- Add error handling for when a content item is not found
- Maintain existing functionality (scroll sync, frame layout, etc.)

**Non-Goals:**
- Changing the content API structure
- Modifying the landing page display logic
- Adding new content features or capabilities

## Decisions

**Decision: Use Array.find() to filter content by ID**
- **Rationale**: Simple, efficient, and idiomatic for finding a single item in an array
- **Alternative considered**: Array.filter() with length check - more verbose but equally valid
- **Why this choice**: Clear and concise, matches the requirement to find a specific item by ID

**Decision: Add error handling for missing content**
- **Rationale**: Provides better user experience and debugging information
- **Alternative considered**: Silent failure or redirect to landing page
- **Why this choice**: Allows users to see the error and understand what went wrong

## Risks / Trade-offs

**Risk**: Content item ID mismatch between landing page and content viewer
- **Mitigation**: The content API ensures matching IDs for corresponding files in en/ and es/ directories

**Risk**: API returns empty array or malformed data
- **Mitigation**: Add try-catch block with error logging in ContentViewer component

**Trade-off**: Minimal code change vs. comprehensive error handling
- **Decision**: Keep it minimal - only add the necessary filtering and error handling