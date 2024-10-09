chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.action === "closeTab") {
    chrome.tabs.remove(sender.tab.id);
  }
});
