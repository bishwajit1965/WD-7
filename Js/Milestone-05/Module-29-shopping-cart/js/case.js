function caseNumberIncreaseDecrease(isIncrease) {
  const caseNumber = document.getElementById("increase-decrease-case-number");
  const decreaseButton = catchElement("decrease-case-number");
  const caseNumberString = caseNumber.value;
  if (caseNumberString > 0) {
    const caseNumberValue = parseInt(caseNumberString);
    console.log(caseNumberValue);

    let updatedCaseNumber;

    if (isIncrease === true) {
      updatedCaseNumber = caseNumberValue + 1;
    } else {
      updatedCaseNumber = caseNumberValue - 1;
    }

    caseNumber.value = updatedCaseNumber;

    return updatedCaseNumber;
  } else {
    decreaseButton.classList.add("disabled");
    alert("Case no must be greater than zero.");
  }
}

// case number button increase price count
document
  .getElementById("increase-case-number")
  .addEventListener("click", function () {
    const updatedCaseNumber = caseNumberIncreaseDecrease(true);
    updatedCaseNumberTotalPrice(updatedCaseNumber);
  });

// case number button decrease price count
document
  .getElementById("decrease-case-number")
  .addEventListener("click", function () {
    const updatedCaseNumber = caseNumberIncreaseDecrease(false);
    updatedCaseNumberTotalPrice(updatedCaseNumber);
  });

// Calculate subtotal tax and total
document
  .getElementById("calculate-actual-price")
  .addEventListener("click", function () {
    // Sub total
    const priceHolder = catchElement("subtotal");
    const subtotal = totalPrice();
    priceHolder.innerText = parseFloat(subtotal).toFixed(2);

    // Tax
    const taxHolder = catchElement("tax");
    const tax = parseFloat(subtotal * 0.1);
    taxHolder.innerText = tax.toFixed(2);
    // Total
    const totalHolder = catchElement("total");
    const total = subtotal - tax;
    totalHolder.innerText = total.toFixed(2);
  });

// Remove Phone price
document
  .getElementById("remove-phone-price")
  .addEventListener("click", function () {
    const removePhoneData = catchElement("phone-price");
    const removePhoneNumber = catchElement("phone-number-increase-decrease");
    removePhoneData.innerText = "1219";
    removePhoneNumber.value = "1";
  });
// Remove case price
document
  .getElementById("remove-case-price")
  .addEventListener("click", function () {
    const removeCaseData = catchElement("case-price");
    const removeCaseNumber = catchElement("increase-decrease-case-number");
    removeCaseData.innerText = "59";
    removeCaseNumber.value = "1";
  });
