# Test321 Chrome Extension - Installation & Testing Guide

## 🎯 Project Overview

This Chrome extension was built to test **Augment Code's remote synchronization** and **multi-PC workflow capabilities**. It demonstrates:

- **Modern Tech Stack**: Svelte 5+ with TypeScript and Tailwind CSS
- **Chrome Extension Features**: Popup UI, content scripts, background workers
- **Multi-PC Testing**: How changes sync across different development environments

## 🚀 Quick Installation

### 1. Build the Extension
```bash
cd chrome-extension
npm install
npm run build
```

### 2. Load in Chrome
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **"Developer mode"** (toggle in top-right corner)
3. Click **"Load unpacked"**
4. Select the `chrome-extension/dist` folder
5. The extension should now appear in your Chrome toolbar!

## 🎮 Features & Demo

### Extension Popup Features:
- **🎨 Random Color**: Changes webpage background to random colors
- **🔄 Reset Color**: Restores original background
- **✨ Text Highlighter**: Select text on any page, then click to highlight
- **🔔 Notifications**: Shows Chrome notifications with custom messages
- **💾 Data Storage**: Save/load data using Chrome's storage API
- **📋 Page Info**: Displays current page title and URL

### Keyboard Shortcuts:
- **`Ctrl+Shift+T`**: Quick activation with visual flash effect

### Visual Indicators:
- **Green dot**: Small indicator showing extension is active on each page

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Build and watch for changes
npm run dev

# Type checking
npm run check

# Lint code
npm run lint

# Format code
npm run format
```

## 🌐 Multi-PC Testing Strategy

### Branch Management:
- **Current**: Working on `main` branch
- **Testing Conflicts**: Create feature branches on different PCs
- **Sync Testing**: Make simultaneous changes to test Augment Code's conflict resolution

### Test Scenarios:
1. **Same Branch, Different PCs**: Both PCs work on `main` branch
2. **Feature Branches**: Create `feature/pc1-changes` and `feature/pc2-changes`
3. **Conflict Resolution**: Modify same files simultaneously
4. **Augment Code Sync**: Test how Augment handles remote synchronization

## 📁 Project Structure

```
chrome-extension/
├── src/
│   ├── popup/           # Svelte popup UI
│   │   ├── Popup.svelte # Main popup component
│   │   ├── popup.ts     # Popup entry point
│   │   └── popup.html   # Popup HTML template
│   ├── content/         # Content scripts (runs on webpages)
│   │   ├── content.ts   # Content script logic
│   │   └── content.css  # Content script styles
│   ├── background/      # Background service worker
│   │   └── background.ts
│   └── app.css         # Global styles (Tailwind)
├── static/
│   └── icons/          # Extension icons (SVG)
├── dist/               # Built extension (load this in Chrome)
├── manifest.json       # Chrome extension manifest v3
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Build configuration
└── build.js           # Custom build script
```

## 🧪 Testing the Extension

### Basic Functionality:
1. **Install** the extension following the guide above
2. **Click** the extension icon in Chrome toolbar
3. **Try each button** in the popup:
   - Random Color → Should change page background
   - Highlight Text → Select text first, then click
   - Notifications → Should show Chrome notification
   - Save Data → Enter text and save, reload extension to test persistence

### Advanced Testing:
1. **Keyboard Shortcut**: Press `Ctrl+Shift+T` on any webpage
2. **Visual Indicator**: Look for small green dot in top-right of pages
3. **Developer Console**: Check for extension logs in browser DevTools

## 🔄 Multi-PC Sync Testing

### Scenario 1: Same Branch
1. **PC 1**: Make changes to `src/popup/Popup.svelte`
2. **PC 2**: Make different changes to same file
3. **Test**: How does Augment Code handle conflicts?

### Scenario 2: Feature Branches
1. **PC 1**: `git checkout -b feature/pc1-ui-improvements`
2. **PC 2**: `git checkout -b feature/pc2-new-features`
3. **Test**: Independent development, then merge

### Scenario 3: Real-time Sync
1. **Both PCs**: Work simultaneously on different files
2. **Test**: How quickly do changes sync?
3. **Observe**: Augment Code's conflict resolution

## 🎯 Expected Outcomes

### ✅ Success Indicators:
- Extension loads without errors in Chrome
- All popup buttons work as expected
- Content script shows green indicator
- Background script logs appear in DevTools
- Data persistence works across browser sessions

### 🔍 Multi-PC Testing Results:
- **Sync Speed**: How fast do changes appear on other PCs?
- **Conflict Handling**: Does Augment Code prevent conflicts?
- **Branch Management**: How are branches handled across PCs?
- **Code Intelligence**: Does context remain consistent?

## 🛠️ Troubleshooting

### Common Issues:
1. **Extension won't load**: Check `chrome://extensions/` for error messages
2. **Popup doesn't open**: Verify `popup.html` and `popup.js` exist in `dist/`
3. **Icons missing**: Ensure SVG icons are copied to `dist/icons/`
4. **TypeScript errors**: Run `npm run check` to verify types

### Debug Steps:
1. Open Chrome DevTools on extension popup
2. Check Console tab for JavaScript errors
3. Verify all files exist in `dist/` folder
4. Test on a simple webpage first (like `google.com`)

## 📝 Next Steps

1. **Install and test** the extension on your primary PC
2. **Set up second PC** with same repository
3. **Make simultaneous changes** to test Augment Code sync
4. **Document results** of multi-PC testing
5. **Iterate** based on sync behavior observations

---

**Built with**: Svelte 5+ • TypeScript • Tailwind CSS • Chrome Extension API • Vite
**Purpose**: Testing Augment Code remote synchronization and multi-PC workflows
