// Calculate conditional phone number increase decrease and price
function phoneNumberIncreaseDecrease(isIncrease) {
  const phoneNumber = document.getElementById("phone-number-increase-decrease");
  const phoneNumberString = phoneNumber.value;
  const phoneNumberValue = parseInt(phoneNumberString);
  console.log(phoneNumberValue);

  let updatedPhoneNumber;

  if (isIncrease === true) {
    updatedPhoneNumber = phoneNumberValue + 1;
  } else {
    updatedPhoneNumber = phoneNumberValue - 1;
  }
  phoneNumber.value = updatedPhoneNumber;
  return updatedPhoneNumber;
}

// Update phone number price
function updatedPhoneNumberTotalPrice(updatedPhoneNumber) {
  const totalPrice = updatedPhoneNumber * 1219;
  const phonePrice = document.getElementById("phone-price");
  phonePrice.innerText = totalPrice;
}

// Phone number button increase price count
document
  .getElementById("increase-phone-number")
  .addEventListener("click", function () {
    const updatedPhoneNumber = phoneNumberIncreaseDecrease(true);
    updatedPhoneNumberTotalPrice(updatedPhoneNumber);
  });

// Phone number button decrease price count
document
  .getElementById("decrease-phone-number")
  .addEventListener("click", function () {
    const updatedPhoneNumber = phoneNumberIncreaseDecrease(false);
    updatedPhoneNumberTotalPrice(updatedPhoneNumber);
  });
