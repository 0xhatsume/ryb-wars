<script lang="ts">
  import { onMount } from 'svelte';
  import { Palette, Highlighter, Info, Bell, Save, Trash2 } from 'lucide-svelte';
  
  let currentTab: chrome.tabs.Tab | null = null;
  let savedData = '';
  let notificationText = 'Hello from Test321 Extension!';

  onMount(async () => {
    // Get current active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    currentTab = tab;
    
    // Load saved data
    const result = await chrome.storage.local.get(['savedData']);
    savedData = result.savedData || '';
  });

  async function changePageColor() {
    if (!currentTab?.id) return;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    await chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      func: (color: string) => {
        document.body.style.backgroundColor = color;
        document.body.style.transition = 'background-color 0.5s ease';
      },
      args: [randomColor]
    });
  }

  async function highlightText() {
    if (!currentTab?.id) return;
    
    await chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      func: () => {
        const selection = window.getSelection();
        if (selection && selection.toString()) {
          const range = selection.getRangeAt(0);
          const span = document.createElement('span');
          span.style.backgroundColor = '#ffeb3b';
          span.style.padding = '2px 4px';
          span.style.borderRadius = '3px';
          range.surroundContents(span);
        } else {
          alert('Please select some text first!');
        }
      }
    });
  }

  async function showNotification() {
    await chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: 'Test321 Extension',
      message: notificationText
    });
  }

  async function saveData() {
    await chrome.storage.local.set({ savedData });
    alert('Data saved successfully!');
  }

  async function clearData() {
    savedData = '';
    await chrome.storage.local.remove(['savedData']);
    alert('Data cleared!');
  }

  function resetPageColor() {
    if (!currentTab?.id) return;
    
    chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      func: () => {
        document.body.style.backgroundColor = '';
      }
    });
  }
</script>

<div class="w-80 p-4 bg-white">
  <div class="mb-4">
    <h1 class="text-xl font-bold text-gray-800 mb-2">Test321 Extension</h1>
    <p class="text-sm text-gray-600">Built with Svelte 5+ & TypeScript</p>
  </div>

  {#if currentTab}
    <div class="mb-4 p-3 bg-gray-50 rounded-lg">
      <div class="flex items-center gap-2 mb-2">
        <Info size={16} class="text-blue-500" />
        <span class="font-medium text-sm">Current Page</span>
      </div>
      <p class="text-xs text-gray-700 truncate" title={currentTab.title}>
        {currentTab.title}
      </p>
      <p class="text-xs text-gray-500 truncate" title={currentTab.url}>
        {currentTab.url}
      </p>
    </div>
  {/if}

  <div class="space-y-3">
    <div class="grid grid-cols-2 gap-2">
      <button
        onclick={changePageColor}
        class="flex items-center gap-2 px-3 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
      >
        <Palette size={16} />
        Random Color
      </button>
      
      <button
        onclick={resetPageColor}
        class="flex items-center gap-2 px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
      >
        Reset Color
      </button>
    </div>

    <button
      onclick={highlightText}
      class="w-full flex items-center gap-2 px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm"
    >
      <Highlighter size={16} />
      Highlight Selected Text
    </button>

    <div class="space-y-2">
      <input
        bind:value={notificationText}
        placeholder="Notification message..."
        class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onclick={showNotification}
        class="w-full flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
      >
        <Bell size={16} />
        Show Notification
      </button>
    </div>

    <div class="space-y-2">
      <textarea
        bind:value={savedData}
        placeholder="Enter some data to save..."
        class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows="3"
      ></textarea>
      <div class="grid grid-cols-2 gap-2">
        <button
          onclick={saveData}
          class="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
        >
          <Save size={16} />
          Save Data
        </button>
        <button
          onclick={clearData}
          class="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
        >
          <Trash2 size={16} />
          Clear Data
        </button>
      </div>
    </div>
  </div>

  <div class="mt-4 pt-3 border-t border-gray-200">
    <p class="text-xs text-gray-500 text-center">
      Multi-PC sync test • Version 1.0.0
    </p>
  </div>
</div>
