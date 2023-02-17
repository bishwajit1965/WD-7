// Update case number total price
function updatedCaseNumberTotalPrice(updatedCaseNumber) {
  const totalPrice = updatedCaseNumber * 59;
  const casePrice = document.getElementById("case-price");
  casePrice.innerText = totalPrice;
}

//Catch element
function catchElement(id) {
  const element = document.getElementById(id);
  return element;
}

// calculate total price
function totalPrice() {
  const phoneTotal = catchElement("phone-price");
  const phoneTotalString = phoneTotal.innerText;
  const phoneValue = parseInt(phoneTotalString);

  const caseTotal = catchElement("case-price");
  const caseTotalString = caseTotal.innerText;
  const caseValue = parseInt(caseTotalString);

  const subTotal = phoneValue + caseValue;
  return subTotal;
}
