// Header styles
const header = document.getElementById("header");
header.style.textAlign = "center";
header.style.padding = "0.2rem";
header.style.backgroundColor = "#333";
header.style.color = "#fff";

// Footer styles
const footer = document.getElementById("footer");
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "0.2rem";
footer.style.marginTop = "1rem";

// Main styles
const main = document.getElementById("main");
main.style.textAlign = "center";

// Change button color styles
const changeBtnColor = document.getElementById("btn-change-color");
changeBtnColor.style.color = "#fff";
changeBtnColor.style.fontWeight = "600";
changeBtnColor.style.backgroundColor = "goldenrod";
changeBtnColor.style.padding = "0.5rem";
changeBtnColor.style.border = "none";
changeBtnColor.style.borderRadius = "0.3rem";
changeBtnColor.style.marginTop = "2rem";

// Delete button
const deleteBtn = document.getElementById("btn-delete");
deleteBtn.style.color = "#fff";
deleteBtn.style.fontWeight = "600";
deleteBtn.style.backgroundColor = "red";
deleteBtn.style.padding = "0.5rem";
deleteBtn.style.border = "none";
deleteBtn.style.borderRadius = "0.3rem";
deleteBtn.style.marginTop = "2rem";

// Hide Button on click styles
const hideButton = document.getElementById("btn-hide");
hideButton.style.color = "#fff";
hideButton.style.fontWeight = "600";
hideButton.style.backgroundColor = "purple";
hideButton.style.padding = "0.5rem";
hideButton.style.border = "none";
hideButton.style.borderRadius = "0.3rem";
hideButton.style.marginTop = "2rem";

// Add new list button styles
const addNewList = document.getElementById("add-lists");
addNewList.style.color = "#fff";
addNewList.style.fontWeight = "600";
addNewList.style.backgroundColor = "red";
addNewList.style.padding = "0.5rem";
addNewList.style.border = "none";
addNewList.style.borderRadius = "0.3rem";
addNewList.style.marginTop = "2rem";

// Theme change button styles
const changeThemeBtn = document.getElementById("change-theme-btn");
changeThemeBtn.style.color = "#fff";
changeThemeBtn.style.fontWeight = "600";
changeThemeBtn.style.backgroundColor = "blue";
changeThemeBtn.style.padding = "0.5rem";
changeThemeBtn.style.border = "none";
changeThemeBtn.style.borderRadius = "0.3rem";
changeThemeBtn.style.marginTop = "2rem";

// Hide the button on click
document
  .getElementById("btn-change-color")
  .addEventListener("click", function () {
    const btn = document.getElementById("btn-change-color");
    if (btn.classList.contains("btn-changed")) {
      btn.classList.remove("btn-changed");
      btn.style.backgroundColor = "purple";
      console.log(btn);
    }
  });

// Delete all paragraphs on clicking the button
document.getElementById("btn-delete").addEventListener("click", function () {
  const para = document.getElementsByClassName("item");
  for (const data of para) {
    data.style.display = "none";
  }
});

// Hide button on click
document.getElementById("btn-hide").addEventListener("click", function () {
  const hideButton = document.getElementById("btn-hide");
  hideButton.style.display = "none";
});

// Add new list items from input field
const list = document.getElementById("list-container");
list.style.textAlign = "left";
document
  .getElementById("add-lists")
  .addEventListener("click", function (event) {
    const listContainer = document.getElementById("list-container");
    const li = document.createElement("li");
    li.classList.add("list-item");
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;
    li.innerText = inputFieldValue;
    if (inputFieldValue != "") {
      listContainer.appendChild(li);
    } else {
      alert("ERROR !!! Empty comment box! Type your list item then submit.");
    }
    inputField.value = "";
  });

// Delete list items one by one on click over the list items
document
  .getElementById("list-container")
  .addEventListener("click", function (event) {
    const status = event.target.parentNode.removeChild(event.target);
    if (status) {
      alert("List item has been deleted.");
    }
  });

// Change background color of the fieldset on double click
document
  .getElementById("fieldset-area")
  .addEventListener("dblclick", function () {
    const fieldsetArea = document.getElementById("fieldset-area");
    fieldsetArea.style.backgroundColor = "purple";
    fieldsetArea.style.color = "#fff";
    fieldsetArea.style.padding = "0.5rem";
  });

// Theme color change
document
  .getElementById("change-theme-btn")
  .addEventListener("click", function () {
    const themeChangeBtn = document.getElementById("body");
    themeChangeBtn.style.backgroundColor = "#444";
    themeChangeBtn.style.color = "#fff";
  });

// Hide the theme change button
document
  .getElementById("change-theme-btn")
  .addEventListener("click", function () {
    const hide = document.getElementById("change-theme-btn");
    hide.style.display = "none";
  });
