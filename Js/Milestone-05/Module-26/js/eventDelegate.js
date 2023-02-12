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

// Event Delegate DOM events code
document.getElementById("list-container").style.textAlign = "left";

// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     event.target.parentNode.removeChild(event.target);
//     console.log(event.target);
//   });
// }

// Event of all lis has been delegated to parent "list-container" to handle add or remove lis
document
  .getElementById("list-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
    console.log(event.target);
  });

document.getElementById("add-item").addEventListener("click", function () {
  const listContainer = document.getElementById("list-container");
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerText = "New added item displayed";
  listContainer.appendChild(li);
  console.log(li);
});

 
