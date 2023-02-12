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

// Events styles

document
  .getElementById("more-events-btn")
  .addEventListener("click", function () {
    const inputField = document.getElementById("text-message");
    const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);
    const messageField = document.getElementById("text-msg");
    messageField.innerText = inputFieldValue;
    inputField.value = "";
  });

document
  .getElementById("more-events-btn")
  .addEventListener("mouseenter", function () {
    const inputField = document.getElementById("text-message");
    console.log("Event triggered on mouse enter.");
    // const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);
    // const messageField = document.getElementById("text-msg");
    // messageField.innerText = inputFieldValue;
    // inputField.value = "";
  });

document
  .getElementById("more-events-btn")
  .addEventListener("focus", function () {
    // const inputField = document.getElementById("text-message");
    console.log("Event triggered on focus.");
    // const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);
    // const messageField = document.getElementById("text-msg");
    // messageField.innerText = inputFieldValue;
    // inputField.value = "";
  });

document
  .getElementById("more-events-btn")
  .addEventListener("blur", function () {
    // const inputField = document.getElementById("text-message");
    console.log("Event triggered on blur.");
    // const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);
    // const messageField = document.getElementById("text-msg");
    // messageField.innerText = inputFieldValue;
    // inputField.value = "";
  });

document
  .getElementById("more-events-btn")
  .addEventListener("keypress", function (event) {
    const inputField = document.getElementById("text-message");
    console.log(event.target.value);
    // const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);
    // const messageField = document.getElementById("text-msg");
    // messageField.innerText = inputFieldValue;
    // inputField.value = "";
  });

document
  .getElementById("text-message")
  .addEventListener("keyup", function (event) {
    // const inputField = document.getElementById("text-message");
    console.log(event.target.value);
    // const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);
    // const messageField = document.getElementById("text-msg");
    // messageField.innerText = inputFieldValue;
    // inputField.value = "";
  });
