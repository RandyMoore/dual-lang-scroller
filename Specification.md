# Dual-Language Scroller - Product Specification

## Overview
A web application that displays bilingual text content side-by-side with synchronized scrolling. The application serves as a reading tool for comparing text in two languages.

## Core Functionality

### 1. Landing Page
- Displays a list of available content items
- Each item represents a bilingual text pair
- Clicking an item navigates to the content viewer

### 2. Content Viewer
- Opens in the same browser window
- Displays two frames containing text in different languages
- **Initial Layout**: Frames stacked vertically (top and bottom)
- **Target Device**: Optimized for smartphone viewing

### 3. Text Display
- **Styling**: Unstyled text (plain text)
- **Scroll Behavior**: 
  - No scroll bars visible
  - Paragraphs synchronized vertically
  - Scroll position matches between both frames
  - Top of highest visible paragraph aligns in both frames
- **Navigation**:
  - No buttons in the viewer
  - Default back action returns to landing page

## Technical Requirements

### Layout Structure
```
┌─────────────────────┐
│   Landing Page       │
│   (Content List)     │
└─────────────────────┘
         ↓
┌─────────────────────┐
│   Frame 1 (Top)      │
│   [Language A Text]  │
└─────────────────────┘
┌─────────────────────┐
│   Frame 2 (Bottom)   │
│   [Language B Text]  │
└─────────────────────┘
```

### Synchronization Logic
- Scroll events in either frame trigger scroll in the other frame
- Scroll amount must be identical in both frames
- Paragraph boundaries must align vertically
- No independent scrolling allowed
- Scroll position is synchronized in real-time
- Top of highest visible paragraph aligns in both frames
- Scroll bars are hidden but functionality is preserved

### User Experience
- **Touch-friendly**: Optimized for touch scrolling
- **Minimalist**: No distractions (no buttons, no styling)
- **Intuitive**: Default back behavior is sufficient
- **Responsive**: Works well on smartphones

## Data Structure
Content items should contain:
- Unique identifier
- Title/Name (in both languages)
- Language A text content (e.g., English)
- Language B text content (e.g., Spanish)
- Metadata (optional: author, date, difficulty level, etc.)

**Content File Format:**
- Plain text files (no HTML/markdown styling)
- UTF-8 encoding
- Paragraphs separated by newlines
- No special formatting or markup
- File naming: `content-{language}.txt` where language is ISO code (e.g., `content-en.txt`, `content-es.txt`)

## Design Principles
1. **Simplicity**: Remove all unnecessary elements
2. **Consistency**: Maintain uniform behavior across all content
3. **Performance**: Fast loading and smooth scrolling
4. **Accessibility**: Clear, readable text (unstyled but legible)
5. **Usability**: Intuitive navigation and interaction

## Future Enhancements (Out of Scope)
- Horizontal layout option
- Custom styling
- Search functionality
- Bookmarking
- Reading progress indicators
- Font size controls
- Dark mode
- Content filtering
- User accounts
- Translation features
- Audio narration
- Annotation tools

## Success Criteria
- Landing page displays content list
- Clicking content opens viewer
- Two frames display in vertical layout
- Text is unstyled and readable
- No scroll bars visible
- Paragraphs align vertically
- Scrolling one frame scrolls the other
- Back navigation returns to landing page
- Works smoothly on mobile devices
- Supports English and Spanish text content
- Content files are plain text with UTF-8 encoding
- Scroll synchronization works correctly
- Content can be easily added, removed, and organized
