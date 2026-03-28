 # Dual-Language Scroller - Project Structure

## Overview
This document defines the recommended file and folder structure for the dual-language scroller project, following industry best practices for Python and Vue.js development.

## Technology Stack Summary
- **Backend**: Python 3.11+ with Flask
- **Frontend**: Vue.js 3 with TypeScript and Vite
- **Type Checking**: mypy (Python), TypeScript (Vue)
- **Testing**: pytest (Python), Vitest (Vue), Selenium (visual)
- **Environment Management**: pyenv (Python), nvm (Node.js)

## Project Root Structure

```
dual-lang-scroller/
├── .git/
├── .gitignore
├── LICENSE
├── README.md
├── Specification.md
├── Architecture.md
├── ProjectStructure.md
├── backend/
│   ├── .venv/
│   ├── pyproject.toml
│   ├── requirements.txt
│   ├── src/
│   │   ├── __init__.py
│   │   ├── app.py
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   └── content.py
│   │   ├── config.py
│   │   ├── content_loader.py
│   │   └── utils.py
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── conftest.py
│   │   ├── unit/
│   │   │   ├── __init__.py
│   │   │   ├── test_api.py
│   │   │   ├── test_content_loader.py
│   │   │   └── test_utils.py
│   │   └── visual/
│   │       ├── __init__.py
│   │       ├── test_landing_page.py
│   │       ├── test_content_viewer.py
│   │       └── test_scroll_synchronization.py
│   └── .mypy.ini
├── frontend/
│   ├── node_modules/
│   ├── dist/
│   ├── .nvmrc
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── index.html
│   ├── src/
│   │   ├── main.ts
│   │   ├── App.vue
│   │   ├── assets/
│   │   │   └── styles/
│   │   │       └── main.css
│   │   ├── components/
│   │   │   ├── __init__.py
│   │   │   ├── LandingPage.vue
│   │   │   ├── ContentViewer.vue
│   │   │   └── LanguageFrame.vue
│   │   ├── composables/
│   │   │   ├── __init__.py
│   │   │   ├── useScrollSync.ts
│   │   │   └── useContent.ts
│   │   ├── router/
│   │   │   ├── __init__.py
│   │   │   └── index.ts
│   │   ├── stores/
│   │   │   ├── __init__.py
│   │   │   └── content.ts
│   │   ├── types/
│   │   │   ├── __init__.py
│   │   │   ├── api.d.ts
│   │   │   └── content.d.ts
│   │   ├── utils/
│   │   │   ├── __init__.py
│   │   │   ├── scrollUtils.ts
│   │   │   └── textUtils.ts
│   │   └── views/
│   │       ├── __init__.py
│   │       ├── LandingPage.vue
│   │       └── ContentViewer.vue
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── __init__.py
│   │   │   ├── testLandingPage.spec.ts
│   │   │   ├── testContentViewer.spec.ts
│   │   │   ├── testLanguageFrame.spec.ts
│   │   │   ├── testScrollSync.spec.ts
│   │   │   └── testContent.spec.ts
│   │   ├── visual/
│   │   │   ├── __init__.py
│   │   │   ├── testLandingPage.spec.ts
│   │   │   ├── testContentViewer.spec.ts
│   │   │   └── testScrollSynchronization.spec.ts
│   │   └── fixtures/
│   │       ├── content.json
│   │       └── test-content-en.txt
│   ├── .env.test
│   ├── .env.development
│   ├── .env.production
│   ├── playwright.config.ts
│   └── vitest.config.ts
├── content/
│   ├── content.json
│   ├── item-001/
│   │   ├── title.txt
│   │   ├── content-en.txt
│   │   └── content-es.txt
│   ├── item-002/
│   │   ├── title.txt
│   │   ├── content-en.txt
│   │   └── content-es.txt
│   └── ...
└── .github/
    └── workflows/
        (No CI/CD workflows - all testing is local)
```

## Detailed Directory Explanations

### Root Level
- **.git/**: Git repository
- **.gitignore**: Files to exclude from version control
- **LICENSE**: Project license
- **README.md**: Project documentation
- **Specification.md**: Product specification
- **Architecture.md**: Technology stack proposal
- **ProjectStructure.md**: This file

### Backend Directory (`backend/`)
- **.venv/**: Python virtual environment (created by pyenv)
- **pyproject.toml**: Python project configuration and dependencies
- **requirements.txt**: Python dependencies (for pip)
- **src/**: Source code directory
  - **app.py**: Flask application entry point
  - **api/**: API route handlers
    - **content.py**: Content API endpoints
  - **config.py**: Application configuration
  - **content_loader.py**: Content file loading logic
  - **utils.py**: Utility functions
- **tests/**: Test directory
  - **unit/**: Unit tests
  - **visual/**: Visual/Selenium tests
  - **conftest.py**: Pytest configuration and fixtures
- **.mypy.ini**: Mypy type checking configuration

### Frontend Directory (`frontend/`)
- **node_modules/**: Node.js dependencies (created by npm/pnpm)
- **dist/**: Build output directory
- **.nvmrc**: Node.js version specification
- **package.json**: Node.js project configuration and dependencies
- **pnpm-lock.yaml**: Dependency lock file
- **tsconfig.json**: TypeScript configuration
- **vite.config.ts**: Vite build tool configuration
- **index.html**: HTML entry point
- **src/**: Source code directory
  - **main.ts**: Vue application entry point
  - **App.vue**: Root component
  - **assets/**: Static assets
    - **styles/**: Global styles
  - **components/**: Reusable Vue components
    - **LandingPage.vue**: Landing page component
    - **ContentViewer.vue**: Content viewer component
    - **LanguageFrame.vue**: Language frame component
  - **composables/**: Vue Composition API functions
    - **useScrollSync.ts**: Scroll synchronization logic
    - **useContent.ts**: Content fetching logic
  - **router/**: Vue Router configuration
    - **index.ts**: Router setup
  - **stores/**: Pinia state management
    - **content.ts**: Content store
  - **types/**: TypeScript type definitions
    - **api.d.ts**: API types
    - **content.d.ts**: Content types
  - **utils/**: Utility functions
    - **scrollUtils.ts**: Scroll-related utilities
    - **textUtils.ts**: Text-related utilities
  - **views/**: Page components
    - **LandingPage.vue**: Landing page view
    - **ContentViewer.vue**: Content viewer view
- **tests/**: Test directory
  - **unit/**: Unit tests
  - **visual/**: Visual/Selenium tests
  - **fixtures/**: Test fixtures
- **.env.***: Environment-specific configuration files
- **playwright.config.ts**: Playwright visual testing configuration
- **vitest.config.ts**: Vitest unit testing configuration

### Content Directory (`content/`)
- **content.json**: Metadata for all content items
- **item-001/**: Content item 001
  - **title.txt**: Title in both languages
  - **content-en.txt**: English text content
  - **content-es.txt**: Spanish text content
- **item-002/**: Content item 002
  - **title.txt**: Title in both languages
  - **content-en.txt**: English text content
  - **content-es.txt**: Spanish text content
- **...**: Additional content items

### GitHub Workflows (`.github/workflows/`)
- **python-test.yml**: CI/CD for Python backend tests
- **frontend-test.yml**: CI/CD for frontend tests

## Configuration Files

### Backend Configuration

**Key Configuration Requirements:**
- `pyproject.toml`: Defines Python dependencies and build system
- `.mypy.ini`: Enables strict type checking for Python code
- `requirements.txt`: Lists production dependencies for pip
- Virtual environment management using pyenv
- Test dependencies separate from production dependencies

### Frontend Configuration

**Key Configuration Requirements:**
- `package.json`: Defines Vue.js dependencies, scripts, and project metadata
- `tsconfig.json`: TypeScript compiler configuration for type safety
- `vite.config.ts`: Build tool configuration and development server settings
- `vitest.config.ts`: Unit testing framework configuration
- `playwright.config.ts`: Visual testing framework configuration
- Environment-specific configuration files for different environments
- Node.js version management using nvm
- Package manager: npm or pnpm

## Development Environment Setup

### Python Backend Setup

**Prerequisites:**
- Python 3.11+ installed via pyenv
- Virtual environment management with pyenv

**Setup Steps:**
1. Install Python version using pyenv
2. Create virtual environment
3. Activate virtual environment
4. Install dependencies from requirements.txt
5. Install development dependencies for testing
6. Run type checking with mypy
7. Run unit tests with pytest
8. Run visual tests with pytest-selenium
9. Start development server with Flask

### Frontend Setup

**Prerequisites:**
- Node.js installed via nvm
- Package manager: npm or pnpm

**Setup Steps:**
1. Install Node.js version using nvm
2. Navigate to frontend directory
3. Install dependencies
4. Run development server with Vite
5. Run unit tests with Vitest
6. Run visual tests with Playwright
7. Build for production

## Best Practices

### Python Backend
- Use `src/` layout for source code
- Keep virtual environment in `.venv/` (add to `.gitignore`)
- Use `pyproject.toml` for project configuration
- Enable strict type checking with mypy
- Write unit tests for all modules
- Write visual tests for critical user flows
- Use `requirements.txt` for production dependencies
- Add `.mypy.ini` for type checking configuration

### Frontend (Vue.js + TypeScript)
- Use TypeScript for type safety
- Follow Vue 3 Composition API style
- Use Vite for fast development and build
- Organize components by feature/domain
- Use composables for reusable logic
- Use Pinia for state management
- Write unit tests with Vitest
- Write visual tests with Playwright
- Add `tsconfig.json` for TypeScript configuration
- Add `vite.config.ts` for build tool configuration

### Content Management
- Store content files in `content/` directory
- Use `content.json` for metadata
- Organize content items in subdirectories
- Keep content files plain text (no styling)
- Use UTF-8 encoding for all text files

### Testing
- Unit tests for individual functions and components
- Visual tests for critical user flows
- Use pytest for Python backend
- Use Vitest for Vue frontend
- Use Selenium/Playwright for visual testing
- Add test fixtures for test data
- Run tests locally in development environment

### Version Control
- Add `.gitignore` to exclude unnecessary files
- Commit configuration files
- Document setup instructions in README
- Use semantic versioning for releases
- No CI/CD pipeline required - all testing is local

### AI-Assisted Development
- Review all LLM-generated code for correctness
- Use beads to structure complex multi-step tasks
- Document LLM-generated decisions in code comments
- Test all generated code before merging

## LLM-Assisted Development Tools

### Configuration Files
- `.llm-config.json`: Local LLM configuration
- `beads/beads.config.yaml`: Task orchestration

### Quick Commands
```bash
# Run planning workflow
beads run --workflow planning

# Generate beads from specification
beads generate --from Specification.md
```

## Summary

This structure follows industry best practices for Python and Vue.js development:

1. **Python**: Uses pyenv for version management, virtual environments for isolation, mypy for type checking
2. **Vue.js**: Uses Vite for build tooling, TypeScript for type safety, Composition API for code organization
3. **Testing**: Comprehensive test coverage with pytest, Vitest, and Selenium/Playwright
4. **Content**: File-based storage with clear organization
5. **Configuration**: Clear separation of concerns with dedicated configuration files
6. **Local Development**: All testing and development happens locally, no CI/CD pipeline required

This structure is maintainable, scalable, and follows modern development practices while keeping the project simple for personal use.
