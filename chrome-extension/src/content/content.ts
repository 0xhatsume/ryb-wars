// Content script for Test321 Extension
// This script runs on every webpage

console.log('Test321 Extension content script loaded');

// Add a subtle indicator that the extension is active
const indicator = document.createElement('div');
indicator.id = 'test321-indicator';
indicator.style.cssText = `
  position: fixed;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  z-index: 10000;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;
indicator.title = 'Test321 Extension Active';

// Add indicator to page
document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(indicator);
  
  // Fade out after 3 seconds
  setTimeout(() => {
    indicator.style.opacity = '0.3';
  }, 3000);
});

// If DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(indicator);
  });
} else {
  document.body.appendChild(indicator);
  setTimeout(() => {
    indicator.style.opacity = '0.3';
  }, 3000);
}

// Listen for messages from popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Content script received message:', request);
  
  if (request.action === 'highlightText') {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.backgroundColor = '#ffeb3b';
      span.style.padding = '2px 4px';
      span.style.borderRadius = '3px';
      span.className = 'test321-highlight';
      
      try {
        range.surroundContents(span);
        sendResponse({ success: true, text: selection.toString() });
      } catch (error) {
        console.error('Error highlighting text:', error);
        sendResponse({ success: false, error: error.message });
      }
    } else {
      sendResponse({ success: false, error: 'No text selected' });
    }
  }
  
  if (request.action === 'changeBackgroundColor') {
    document.body.style.backgroundColor = request.color;
    document.body.style.transition = 'background-color 0.5s ease';
    sendResponse({ success: true, color: request.color });
  }
  
  if (request.action === 'resetBackgroundColor') {
    document.body.style.backgroundColor = '';
    sendResponse({ success: true });
  }
  
  if (request.action === 'getPageInfo') {
    sendResponse({
      title: document.title,
      url: window.location.href,
      domain: window.location.hostname,
      textContent: document.body.innerText.substring(0, 200) + '...'
    });
  }
});

// Add keyboard shortcut listener (Ctrl+Shift+T for demo)
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === 'T') {
    event.preventDefault();
    
    // Send message to background script
    chrome.runtime.sendMessage({
      action: 'showNotification',
      title: 'Keyboard Shortcut',
      message: `Test321 Extension activated on ${document.title}`
    });
    
    // Add a temporary visual effect
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(74, 222, 128, 0.1);
      z-index: 9999;
      pointer-events: none;
      animation: flash 0.5s ease-out;
    `;
    
    // Add flash animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes flash {
        0% { opacity: 1; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(flash);
    
    setTimeout(() => {
      document.body.removeChild(flash);
      document.head.removeChild(style);
    }, 500);
  }
});

// Export for potential use by other scripts
(window as any).test321Extension = {
  version: '1.0.0',
  active: true,
  highlightText: () => {
    chrome.runtime.sendMessage({ action: 'highlightText' });
  }
};
