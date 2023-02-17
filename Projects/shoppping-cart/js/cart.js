let serial = 0;
let grandTotal = 0;
const tableText = document.getElementById("table-container");
tableText.style.fontSize = "10px";
// Jacket one
document
  .getElementById("first-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagElementById("first-card-title");
    const elementPrice = getTagElementById("jacket-price");
    const elementQuantity = getTagElementById("jacket-quantity");
    const productTotal = parseFloat(elementPrice) * parseInt(elementQuantity);

    displayDataInTable(
      elementTitle,
      elementPrice,
      elementQuantity,
      productTotal
    );
    disableButton("first-card-btn");
  });

// Camera
document
  .getElementById("second-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagElementById("second-card-title");
    const elementPrice = getTagElementById("camera-price");
    const elementQuantity = getTagElementById("camera-quantity");
    const productTotal = parseFloat(elementPrice) * parseInt(elementQuantity);

    displayDataInTable(
      elementTitle,
      elementPrice,
      elementQuantity,
      productTotal
    );
    disableButton("second-card-btn");
  });

// jacket two
document
  .getElementById("third-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagElementById("third-card-title");
    const elementPrice = getTagElementById("jacket2-price");
    const elementQuantity = getTagElementById("jacket2-quantity");
    const productTotal = parseFloat(elementPrice) * parseInt(elementQuantity);

    displayDataInTable(
      elementTitle,
      elementPrice,
      elementQuantity,
      productTotal
    );
    disableButton("third-card-btn");
  });

// Smart Phone
document
  .getElementById("fourth-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagElementById("fourth-card-title");
    const elementPrice = getTagElementById("phone-price");
    const elementQuantity = getTagElementById("phone-quantity");
    const productTotal = parseFloat(elementPrice) * parseInt(elementQuantity);

    displayDataInTable(
      elementTitle,
      elementPrice,
      elementQuantity,
      productTotal
    );
    disableButton("fourth-card-btn");
  });

// Coffee
document
  .getElementById("fifth-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagElementById("fifth-card-title");
    const elementPrice = getTagElementById("coffee-price");
    const elementQuantity = getTagElementById("coffee-quantity");
    const productTotal = parseFloat(elementPrice) * parseInt(elementQuantity);

    displayDataInTable(
      elementTitle,
      elementPrice,
      elementQuantity,
      productTotal
    );
    disableButton("fifth-card-btn");
  });

// Razor
document
  .getElementById("sixth-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagElementById("sixth-card-title");
    const elementPrice = getTagElementById("razor-price");
    const elementQuantity = getTagElementById("razor-quantity");
    const productTotal = parseFloat(elementPrice) * parseInt(elementQuantity);

    displayDataInTable(
      elementTitle,
      elementPrice,
      elementQuantity,
      productTotal
    );
    disableButton("sixth-card-btn");
  });

// Utility functions
function getTagElementById(id) {
  const element = document.getElementById(id).innerText;
  return element;
}

// Get element
function displayDataInTable(
  elementTitle,
  elementPrice,
  elementQuantity,
  productTotal
) {
  const container = document.getElementById("table-container");
  const grandTotalRow = document.getElementById("table-row-last");
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${(serial += 1)}</td>
    <td>${elementTitle}</td>
    <td>${elementPrice}</td>
    <td>${elementQuantity}</td>
    <td>${productTotal}</td>
    `;

  grandTotalRow.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td>Grand total:</td>
    <td>${(grandTotal += productTotal)}</td>
  `;
  container.appendChild(tr);
}

// Disable button on click
function disableButton(id) {
  const btn = document.getElementById(id);
  btn.setAttribute("disabled", true);
}
