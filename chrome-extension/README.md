# Test321 Chrome Extension

A simple Chrome extension built with **Svelte 5+** and **TypeScript** to test multi-PC synchronization with Augment Code.

## Features

- 🎨 **Random Color Changer**: Changes webpage background to random colors
- ✨ **Text Highlighter**: Highlights selected text on any webpage
- 📋 **Page Info Display**: Shows current page title and URL
- 🔔 **Notifications**: Custom Chrome notifications
- 💾 **Data Storage**: Save and retrieve data using Chrome storage API
- ⌨️ **Keyboard Shortcut**: Press `Ctrl+Shift+T` for quick activation
- 🟢 **Visual Indicator**: Small green dot shows extension is active

## Tech Stack

- **Frontend**: Svelte 5+ with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide Svelte
- **Build Tool**: Vite
- **Extension**: Chrome Manifest V3

## Development Setup

1. **Install dependencies**:
   ```bash
   cd chrome-extension
   npm install
   ```

2. **Build the extension**:
   ```bash
   npm run build
   ```

3. **Load in Chrome**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `dist` folder

## Development Commands

- `npm run dev` - Build and watch for changes
- `npm run build` - Build for production
- `npm run check` - Type checking
- `npm run lint` - Lint code
- `npm run format` - Format code

## Multi-PC Testing

This extension is designed to test how Augment Code handles:
- Remote repository synchronization
- Branch management across multiple PCs
- Conflict resolution when multiple developers work on the same branch

## Extension Structure

```
chrome-extension/
├── src/
│   ├── popup/           # Extension popup UI (Svelte)
│   ├── content/         # Content scripts (runs on webpages)
│   ├── background/      # Background service worker
│   └── lib/            # Shared utilities
├── static/
│   └── icons/          # Extension icons
├── dist/               # Built extension (load this in Chrome)
└── manifest.json       # Chrome extension manifest
```

## Usage

1. Click the extension icon in Chrome toolbar
2. Use the various demo buttons:
   - **Random Color**: Changes page background
   - **Reset Color**: Restores original background
   - **Highlight Selected Text**: Select text first, then click
   - **Show Notification**: Displays a Chrome notification
   - **Save/Clear Data**: Test Chrome storage API

## Keyboard Shortcuts

- `Ctrl+Shift+T`: Quick activation with visual flash effect

## Notes

- The extension shows a small green indicator dot when active
- All features work on any webpage
- Data is stored locally using Chrome's storage API
- Built with modern web technologies for learning purposes
