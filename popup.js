document.addEventListener('DOMContentLoaded', function() {
    const noteArea = document.getElementById('noteArea');
  
    chrome.storage.sync.get(['quickNotes'], function(result) {
      noteArea.value = result.quickNotes || '';
    });
  
    noteArea.addEventListener('input', function() {
      chrome.storage.sync.set({ 'quickNotes': noteArea.value });
    });
  });
  