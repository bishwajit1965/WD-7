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

// DOM Styles
document
  .getElementById("confirm-delete")
  .addEventListener("keyup", function (event) {
    const deleteBtn = document.getElementById("delete-btn");
    const text = event.target.value;
    if (text === "delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
    console.log(text);
  });

document.getElementById("delete-btn").addEventListener("click", function () {
  const secret = document.getElementById("secret-info");
  secret.style.display = "none";
});
