let restrict = ["x.com", "youtube.com"];
if (
  restrict.some((domain) => window.location.host.toLowerCase().includes(domain))
) {
  let imgElement = document.createElement("img");
  imgElement.src = "https://i.gifer.com/81RA.gif";
  imgElement.alt = "Full Screen GIF";
  imgElement.style.position = "fixed";
  imgElement.style.top = "0";
  imgElement.style.left = "0";
  imgElement.style.width = "100vw";
  imgElement.style.height = "100vh";
  imgElement.style.objectFit = "cover";
  document.body.innerHTML = "";
  document.body.appendChild(imgElement);
  let closeTab = () => {
    chrome.runtime.sendMessage({ action: "closeTab" });
  };
  setTimeout(closeTab, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  let re_direct_el = document.getElementById("re_direct");
  re_direct_el.addEventListener("click", function () {
    chrome.tabs.create({
      url: chrome.runtime.getURL("../html/home.html"),
    });
  });
});
