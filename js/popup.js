// let restrict = ["x.com", "youtube.com"];
// if (
//   restrict.some((domain) => window.location.host.toLowerCase().includes(domain))
// ) {
//   let imgElement = document.createElement("img");
//   imgElement.src = "https://i.gifer.com/81RA.gif";
//   imgElement.alt = "Full Screen GIF";
//   imgElement.style.position = "fixed";
//   imgElement.style.top = "0";
//   imgElement.style.left = "0";
//   imgElement.style.width = "100vw";
//   imgElement.style.height = "100vh";
//   imgElement.style.objectFit = "cover";
//   document.body.innerHTML = "";
//   document.body.appendChild(imgElement);
//   let closeTab = () => {
//     chrome.runtime.sendMessage({ action: "closeTab" });
//   };
//   setTimeout(closeTab, 3000);
// }
// document.addEventListener("DOMContentLoaded", function () {
//   let re_direct_el = document.getElementById("re_direct");
//   re_direct_el.addEventListener("click", function () {
//     chrome.tabs.create({
//       url: chrome.runtime.getURL("../html/home.html"),
//     });
//   });
// });
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

  let audioElement = document.createElement("audio");
  audioElement.src = "../wrong-place-129242.mp3";
  audioElement.loop = true;

  document.body.innerHTML = "";
  document.body.appendChild(imgElement);
  document.body.appendChild(audioElement);

  document.body.addEventListener("click", () => {
    audioElement.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });

    setTimeout(() => {
      audioElement.pause();
      chrome.runtime.sendMessage({ action: "closeTab" });
    }, 3000);
  });

  setTimeout(() => {
    chrome.runtime.sendMessage({ action: "closeTab" });
  }, 3000);
}
