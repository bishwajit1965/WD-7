// Header styles
const header = document.getElementById("header");
header.style.textAlign = "center";
header.style.backgroundColor = "#333";
header.style.padding = "0.5rem";
header.style.color = "#fff";

// Main styles
const main = document.getElementById("main");
main.style.border = "1px solid #DDD";
main.style.textAlign = "center";
main.style.width = "80%";
main.style.margin = "auto";
main.style.padding = "1rem 0.5rem";
main.style.boxShadow = "1px 2px 3px #ddd";
main.style.borderRadius = "1px 1px 6px 6px";

// Footer styles
const footer = document.getElementById("footer-text");
footer.style.textAlign = "center";
footer.style.backgroundColor = "#333";
footer.style.padding = "0.1rem";
footer.style.color = "#fff";

// Event bubble DOM events
const section = document.getElementById("content-wrapper");
section.style.textAlign = "left";
section.addEventListener("click", function () {
  console.log("Section triggered");
});

document.getElementById("item1").addEventListener("click", function (event) {
  console.log("Event triggered on item one first click");
  // Many event listeners can be added at the same element as shown below
  // stopImmediatePropagation will prevent all subsequent bubbling
  event.stopImmediatePropagation();
});
document.getElementById("item1").addEventListener("click", function (event) {
  console.log("Event triggered on item one second click");
  event.stopPropagation();
});
document.getElementById("item1").addEventListener("click", function (event) {
  console.log("Event triggered on item one third click");
  event.stopPropagation();
});
const body = document
  .getElementById("body")
  .addEventListener("click", function () {
    console.log("Event triggered on body");
  });
