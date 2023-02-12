// Header styles
const header = document.getElementById("header");
header.style.textAlign = "center";
header.style.backgroundColor = "#333";
header.style.padding = "0.5rem";
header.style.color = "#fff";

// Footer styles
const footer = document.getElementById("footer-text");
footer.style.textAlign = "center";
footer.style.backgroundColor = "#333";
footer.style.padding = "0.1rem";
footer.style.color = "#fff";

// Main styles
const main = document.getElementById("main");
main.style.border = "1px solid #DDD";
main.style.textAlign = "center";
main.style.width = "80%";
main.style.margin = "auto";
main.style.padding = "1rem 0.5rem";
main.style.boxShadow = "1px 2px 3px #ddd";
main.style.borderRadius = "1px 1px 6px 6px";

// Handler styles
document
  .getElementById("more-events-btn")
  .addEventListener("click", function name() {
    //Input field related
    const inputField = document.getElementById("updated-text");
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);
    inputField.value = " ";

    // Updating default message
    const updatedText = document.getElementById("default-text");
    updatedText.innerText = inputFieldValue;
  });
