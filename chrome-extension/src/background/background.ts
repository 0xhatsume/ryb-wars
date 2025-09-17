// Background service worker for Test321 Extension

chrome.runtime.onInstalled.addListener(() => {
  console.log('Test321 Extension installed');
  
  // Set default storage values
  chrome.storage.local.set({
    extensionEnabled: true,
    installDate: new Date().toISOString()
  });

  // Show welcome notification
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon48.png',
    title: 'Test321 Extension',
    message: 'Extension installed successfully! Click the extension icon to get started.'
  });
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  console.log('Extension icon clicked on tab:', tab.url);
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background received message:', request);
  
  if (request.action === 'getTabInfo') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({
        title: tabs[0]?.title,
        url: tabs[0]?.url,
        id: tabs[0]?.id
      });
    });
    return true; // Keep message channel open for async response
  }
  
  if (request.action === 'showNotification') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: request.title || 'Test321 Extension',
      message: request.message || 'Hello from background script!'
    });
    sendResponse({ success: true });
  }
});

// Handle notification clicks
chrome.notifications.onClicked.addListener((notificationId) => {
  console.log('Notification clicked:', notificationId);
  chrome.notifications.clear(notificationId);
});

// Log when tabs are updated (for debugging)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    console.log('Tab updated:', tab.url);
  }
});
