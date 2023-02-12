const heading = document.createElement("h1");
const node = document.createTextNode("I love javascript");
heading.appendChild(node);

const main = document.getElementById("main");
main.appendChild(heading);
