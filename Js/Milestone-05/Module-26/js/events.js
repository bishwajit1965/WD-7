const main = document.getElementById("main");
main.style.border = "1px solid #DDD";
main.style.textAlign = "center";
main.style.width = "80%";
main.style.margin = "auto";
main.style.padding = "0.5rem";
main.style.boxShadow = "1px 2px 3px #ddd";
main.style.borderRadius = "1px 1px 6px 6px";

// Button event
const btn1 = document.getElementById("btn1");
btn1.style.backgroundColor = "red";
btn1.style.color = "#fff";
btn1.style.padding = "0.5rem";
btn1.style.borderRadius = "0.25rem";
btn1.style.border = "none";

btn1.onclick(`console.log("I have been clicked")`);

const buttonBlue = document.getElementById("btn-blue");
buttonBlue.onclick = makeBodyBlue;
function makeBodyBlue() {
  document.body.style.backgroundColor = "blue";
}

function makeBodyRed() {
  document.body.style.backgroundColor = "red";
}

const purpleButton = document.getElementById("btn-purple");
purpleButton.onclick = function makeBodyPurple() {
  document.body.style.backgroundColor = "purple";
};

// Modern option with addEventListener() method
const pinkButton = document.getElementById("btn-pink");
pinkButton.addEventListener("click", makeBodyPink);
function makeBodyPink() {
  document.body.style.backgroundColor = "pink";
}

// Modern option with addEventListener() method with a little variation
const pinkGreen = document.getElementById("btn-green");

pinkGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
// function makeBodyPink() {
//   document.body.style.backgroundColor = "pink";
// }

// Modern option with addEventListener() method with a little more variation
const pinkGreenBg = document.getElementById("btn-green-bg");

pinkGreenBg.addEventListener("click", function makeBodySteelBlue() {
  document.body.style.backgroundColor = "skyBlue";
});
// Modern option with addEventListener() method with a little more variation FINAL VERSION FREQUENTLY USED
document
  .getElementById("btn-golden-rod-bg")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenRod";
  });
