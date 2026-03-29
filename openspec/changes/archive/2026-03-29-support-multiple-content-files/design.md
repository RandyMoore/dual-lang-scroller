## Context

The current implementation uses a content API that reads only files named `content.txt` from the `content/en/` and `content/es/` directories. When users create additional content files (e.g., `example.txt`), these files are not served or displayed on the landing page. The application needs to support multiple content files to showcase different examples.

Current state:
- Content API returns a single content item (array with one element)
- Landing page displays only the `content.txt` content
- New content files are ignored

## Goals / Non-Goals

**Goals:**
- Support reading all `.txt` files from the content directory
- Return an array of content items instead of a single item
- Display all available content items on the landing page
- Maintain backward compatibility with existing content files

**Non-Goals:**
- Changing the file structure or naming conventions
- Adding new features beyond displaying content
- Implementing content management or editing capabilities
- Supporting other file formats beyond `.txt`

## Decisions

**Decision 1: Iterate through all `.txt` files**
- Use `fs.readdirSync()` to list all files in the content directory
- Filter for `.txt` files only
- Read matching English and Spanish files for each `.txt` filename

**Decision 2: Return array of content items**
- Change API response from single object to array of objects
- Each object has `id`, `en`, and `es` properties
- Maintain backward compatibility by keeping the same object structure

**Decision 3: Validate matching file pairs**
- For each `.txt` filename, check if both `en/<filename>.txt` and `es/<filename>.txt` exist
- Skip files that don't have matching pairs
- Return only valid content items

**Decision 4: Update landing page to handle array**
- Map over the array of content items
- Display each item with its ID as the click handler
- Maintain existing styling and interaction patterns

## Risks / Trade-offs

**Risk: Missing file pairs**
- If a user creates `example-en.txt` but forgets `example-es.txt`, the file will be skipped
- **Mitigation**: The API will validate and skip incomplete pairs, logging a warning if needed

**Risk: Performance with many files**
- Reading many large content files could impact performance
- **Mitigation**: The current implementation is simple and efficient; performance is acceptable for typical use cases

**Trade-off: Breaking change**
- Changing from single item to array is a breaking change for any code that expects a single object
- **Mitigation**: The change is internal to the content API and frontend; existing functionality remains the same for users