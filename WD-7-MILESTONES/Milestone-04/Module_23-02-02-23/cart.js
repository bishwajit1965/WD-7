const shoppingCart = [
  { name: "Shirt", quantity: 4, price: 1200 },
  { name: "Pant", quantity: 4, price: 1400 },
  { name: "Sunglass", quantity: 2, price: 600 },
  { name: "Belt", quantity: 3, price: 650 },
  { name: "Shoe", quantity: 2, price: 2200 },
  { name: "Pen", quantity: 12, price: 100 },
  { name: "Shocks", quantity: 2, price: 130 },
];
function calculatePrice(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i];
    sum += product.quantity * product.price;
  }
  console.log(sum);
  if (sum >= 5000) {
    let commission = sum * 0.02;
    let payable = sum - commission;
    return payable;
  } else {
    return sum;
  }
}

const result = calculatePrice(shoppingCart);
console.log(result);
