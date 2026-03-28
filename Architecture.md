# Dual-Language Scroller - Architecture Proposal

## Overview
This document proposes a technology stack for the dual-language scroller project, balancing simplicity, popularity, and strong testing support. The architecture uses Python for the backend, Vue.js for the frontend, and file-based content storage.

## Technology Stack

### Backend: Flask
**Rationale:**
- **Lightweight**: Minimal dependencies, perfect for personal projects
- **Simple**: Easy to learn and use, especially for Python developers
- **Flexible**: No opinionated structure, complete control over the application
- **Well-supported**: Extensive documentation and community resources
- **Testing-friendly**: Excellent integration with pytest

**Why Not Django:**
- Django is more opinionated and feature-rich than needed
- Flask provides simpler routing and template handling for this use case
- Less boilerplate code to learn and maintain

**Key Features:**
- Simple routing for landing page and content viewer
- Static file serving for content files
- JSON file parsing for content metadata
- Minimal configuration required

### Frontend: Vue.js 3
**Rationale:**
- **Lightweight**: Smaller bundle size than React
- **Easy to learn**: Gentle learning curve, excellent documentation
- **Reactive**: Built-in reactivity system perfect for scroll synchronization
- **Testing-friendly**: Good support with Vue Test Utils and Selenium
- **Popular**: Widely used, well-documented, and AI models are well-trained on it

**Why Not React:**
- React has a steeper learning curve
- Vue's reactivity system is more intuitive for this use case
- Vue's template syntax is simpler for beginners

**Key Features:**
- Component-based architecture
- Reactive data binding for scroll synchronization
- Simple routing with Vue Router
- Vue Test Utils for unit testing
- Selenium integration for visual testing

### Content Storage: File System
**Rationale:**
- **Simple**: No database setup required
- **Flexible**: Easy to add, remove, and organize content files
- **Portable**: Content files can be version controlled and shared
- **Performance**: Fast file I/O for text content

**Structure:**
```
/content/
  ├── content.json          # Metadata for all content items
  ├── item-001/
  │   ├── title.txt         # Title in both languages
  │   ├── content-en.txt    # English text
  │   └── content-es.txt    # Spanish text
  ├── item-002/
  │   ├── title.txt
  │   ├── content-en.txt
  │   └── content-es.txt
  └── ...
```

**content.json Format:**
- JSON file containing array of content items
- Each item has unique identifier and title in both languages
- Example structure:
  ```json
  {
    "items": [
      {
        "id": "item-001",
        "title": {
          "en": "Sample Title",
          "es": "Título de Ejemplo"
        }
      }
    ]
  }
  ```

### Testing Framework: Pytest
**Rationale:**
- **Most Popular**: Industry standard for Python testing
- **Easy to use**: Simple syntax, automatic test discovery
- **Extensible**: Rich plugin ecosystem
- **Well-supported**: Excellent documentation and community
- **AI-friendly**: Widely used, AI models are well-trained on it

**Key Features:**
- Unit testing with fixtures
- Parameterized tests
- Integration with Selenium for visual testing
- Clear test output and reporting
- No CI/CD pipeline required - all testing is local

### Visual Testing: Selenium
**Rationale:**
- **Industry Standard**: Most widely used browser automation tool
- **Cross-browser**: Supports Chrome, Firefox, Safari, Edge
- **AI-friendly**: AI models are well-trained on Selenium patterns
- **Visual Verification**: Can verify expected content appears in expected locations
- **Well-documented**: Extensive examples and tutorials

**Key Features:**
- Browser automation for visual testing
- Element location verification
- Content display verification
- Cross-browser compatibility testing
- No CI/CD pipeline required - all testing is local

## System Architecture

### Components

#### 1. Landing Page
- **Route**: `/`
- **Component**: `LandingPage.vue`
- **Functionality**: Displays list of content items from `content.json`
- **Action**: Clicking an item navigates to `/content/:id`

#### 2. Content Viewer
- **Route**: `/content/:id`
- **Components**: 
  - `ContentViewer.vue` (main container)
  - `LanguageFrame.vue` (reusable frame component)
- **Functionality**: 
  - Displays two vertically stacked frames
  - Synchronizes scroll position between frames
  - No scroll bars visible
  - Paragraph alignment maintained

#### 3. Content Loading
- **Backend**: Flask route `/api/content/:id`
- **Functionality**: Returns JSON with title and content for specified item
- **Frontend**: Vue component fetches and displays content

### Data Flow

1. **User clicks content item on landing page**
2. **Vue Router navigates to `/content/:id`**
3. **ContentViewer component loads**
4. **Fetches content from Flask API**
5. **Displays in two LanguageFrame components**
6. **Scroll events trigger synchronization**
7. **Back navigation returns to landing page**

## Testing Strategy

### Unit Tests
- **Framework**: pytest
- **Coverage**:
  - Landing page component rendering
  - Content viewer component rendering
  - Language frame component rendering
  - Content fetching logic
  - Scroll synchronization logic
  - Route handling

### Visual Tests
- **Framework**: pytest-selenium
- **Coverage**:
  - Landing page displays content list
  - Content viewer opens with two frames
  - Text content displays correctly
  - Scroll bars are hidden
  - Paragraphs align vertically
  - Scroll synchronization works
  - Back navigation returns to landing page

### Test Structure
```
/tests/
  ├── unit/
  │   ├── test_landing_page.py
  │   ├── test_content_viewer.py
  │   ├── test_language_frame.py
  │   └── test_content_api.py
  ├── visual/
  │   ├── test_landing_page_visual.py
  │   ├── test_content_viewer_visual.py
  │   └── test_scroll_synchronization.py
  └── conftest.py
```
**Note**: All testing is performed locally in the development environment

## Implementation Considerations

### Scroll Synchronization
- Use Vue's reactivity system to track scroll position
- Event listeners on both frames
- Synchronized scroll position stored in Vue state
- CSS to hide scroll bars while maintaining scroll functionality
- Real-time synchronization for smooth user experience

### Paragraph Alignment
- Use CSS flexbox or grid for layout
- Fixed height containers with `overflow: hidden`
- JavaScript to calculate and align paragraph positions
- Debounce scroll events for performance
- Ensure paragraph boundaries align vertically between frames

### Responsive Design
- Mobile-first approach
- Vertical frame layout optimized for smartphones
- Touch-friendly scrolling
- Responsive typography

## Benefits of This Stack

1. **Simplicity**: Minimal learning curve, especially for Python developers
2. **Popularity**: All technologies are widely used and well-documented
3. **AI-Friendly**: AI models are well-trained on these technologies
4. **Testing**: Strong support for both unit and visual testing
5. **Performance**: Lightweight frameworks for fast loading
6. **Maintainability**: Clear structure and simple code
7. **Flexibility**: Easy to extend and modify as needed

## Future-Proofing

- All chosen technologies are actively maintained
- Large, active communities provide support
- Strong documentation and learning resources
- Widely used in production environments
- Easy to find developers familiar with these technologies

## Risks and Mitigations

**Risk**: Vue.js may have less ecosystem than React
**Mitigation**: Vue has excellent documentation and growing ecosystem

**Risk**: Flask may lack some enterprise features
**Mitigation**: Not needed for this personal use project

**Risk**: File-based storage may scale poorly
**Mitigation**: Project scope is personal use; can migrate to database later if needed

**Risk**: No CI/CD pipeline
**Mitigation**: All testing is performed locally in development environment

## Development Workflow with Local LLM

### Bead-Based Development
- Use beads to structure sequential development tasks
- LLM generates task descriptions and implementation guides
- Each bead represents an atomic unit of work
- Beads can be run independently or orchestrated as workflows

### Prompt Engineering
- Store reusable prompts in `/prompts/` directory
- Template prompts with project context
- Version control prompt iterations
- Review LLM-generated code before implementation

### AI-Assisted Development
- **Local Model Considerations**:
  - Weaker local models require enhanced context for planning
  - Provide detailed examples and references in prompts
  - Use clear, structured output formats
  - Avoid complex nested structures
  - Include code snippets and file paths for reference
  - Offline development capability
  - No API rate limits
  - Direct integration with beads framework
  - Privacy: all code stays local during AI operations

## Conclusion

This technology stack provides an optimal balance of simplicity, popularity, and testing support for the dual-language scroller project. The chosen technologies are well-suited for personal use, easy to learn, and provide strong foundations for testing and future expansion. All testing is performed locally in the development environment.
