document.getElementById("text-bold").addEventListener("click", function () {
  addClass("text-area-data", "font-bold");
});

document.getElementById("text-italic").addEventListener("click", function () {
  addClass("text-area-data", "italic");
});

document.getElementById("center").addEventListener("click", function () {
  addClass("text-area-data", "text-center");
});

document
  .getElementById("change-text-position")
  .addEventListener("click", function () {
    addClass("text-area-data", "text-right");
  });

document.getElementById("font").addEventListener("click", function () {
  addClass("text-area-data", "uppercase");
});

function getTextData(id) {
  const data = document.getElementById(id);
  return data;
}

// Make bold
function addClass(id, addClass) {
  id = document.getElementById(id);
  id.classList.add(addClass);
}
