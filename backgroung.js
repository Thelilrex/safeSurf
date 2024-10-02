const blockedUrls = ["x.com", "https://x.com/"];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("Blocking request to:", details.url);
    return { cancel: true }; // Block the request
  },
  { urls: blockedUrls },
  ["blocking"]
);
