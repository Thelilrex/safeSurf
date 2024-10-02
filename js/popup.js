let count_el = document.getElementById("count");
count_el.innerText += " " + 0;
let restrict = ["x.com"];
function isBlocked() {}
document.addEventListener("DOMContentLoaded", function () {
  const re_direct_el = document.getElementById("re_direct"); // Make sure the ID matches

  re_direct_el.addEventListener("click", function () {
    chrome.tabs.create({
      url: chrome.runtime.getURL("../html/home.html"),
    });
  });
});
