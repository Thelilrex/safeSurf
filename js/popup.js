let restrict = ["x.com"];
if (window.location.host.toLowerCase().includes("x.com")) {
  document.body.innerHTML =
    "<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFidw-FrZFP8uFFYSv5ST1NS1j74NieSJEZA&s' >";
}
document.addEventListener("DOMContentLoaded", function () {
  const re_direct_el = document.getElementById("re_direct");
  re_direct_el.addEventListener("click", function () {
    chrome.tabs.create({
      url: chrome.runtime.getURL("../html/home.html"),
    });
  });
});
