const phones = [
  { name: "Samsung", camera: 2, price: 15000, color: "Silver" },
  { name: "vivo", camera: 2.5, price: 18000, color: "Black" },
  { name: "Nokia", camera: 3.5, price: 20000, color: "Golden" },
  { name: "Walton", camera: 2.2, price: 14000, color: "Ash" },
  { name: "Xaomi", camera: 2.5, price: 12000, color: "Black" },
];

function chooseCheapest(phones) {
  let cheapest = phones[0];
  for (i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const cheapestPhone = chooseCheapest(phones);
console.log(cheapestPhone);
