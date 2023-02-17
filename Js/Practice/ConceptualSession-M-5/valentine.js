// Chocolate cost calculation
document.getElementById("chocolate-btn").addEventListener("click", function () {
  const chocolateQty = getInputFieldValue("chocolate-qty");
  const value = getTextStringValue("per-chocolate-price");
  const totalPrice = chocolateQty * value;
  const chocolateTotal = totalPrice;
  setPrice("chocolate-total", chocolateTotal);
});

// Rose cost calculation
document.getElementById("rose-btn").addEventListener("click", function () {
  const roseQty = getInputFieldValue("rose-qty");
  const value = getTextStringValue("per-rose-price");
  const totalPrice = roseQty * value;
  const chocolateTotal = totalPrice;
  setPrice("rose-total", chocolateTotal);
});

// Diary price calculation
document.getElementById("diary-btn").addEventListener("click", function () {
  const diaryQty = getInputFieldValue("diary-qty");
  const value = getTextStringValue("per-diary-price");
  const totalPrice = diaryQty * value;
  const chocolateTotal = totalPrice;
  setPrice("diary-total", chocolateTotal);
});

// Total calculation
document.getElementById("total-count").addEventListener("click", function () {
  const chocolatePrice = getTextStringValue("chocolate-total");
  const rosePrice = getTextStringValue("rose-total");
  const diaryPrice = getTextStringValue("diary-total");
  const grandTotal = chocolatePrice + rosePrice + diaryPrice;
  const setCost = document.getElementById("total-cost");
  setCost.innerText = grandTotal.toFixed(2);
  console.log(grandTotal);
});

// Cost waiver/reduction calculation
document
  .getElementById("coupon-discount-btn")
  .addEventListener("click", function () {
    const getCost = getTextStringValue("total-cost");
    const couponCode = getInputFieldValue("coupon-id");
    if (couponCode == 101) {
      const payablePrice = getCost * 0.1;
      const actualPayment = getCost - payablePrice;
      const paymentValue = document.getElementById("net-amount-payable");
      paymentValue.innerText = actualPayment.toFixed(2);
      console.log(actualPayment);
    } else {
      alert("Please insert yhe coupon code");
    }
  });

// Color changing
document.getElementById("color-value").addEventListener("click", function () {
  const colorChosen = getColorValue("fav-color");
  const chosenTextAreaData = getElement("text-area-data");
  chosenTextAreaData.style.color = colorChosen;
});
