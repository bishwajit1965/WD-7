const Products = [
  { id: 1, name: "Lenovo Laptop", price: 80000 },
  { id: 2, name: "HP Laptop", price: 85000 },
  { id: 3, name: "Dell Laptop", price: 84000 },
  { id: 4, name: "MackBook-Pro Laptop", price: 120000 },
  { id: 5, name: "Acer Laptop", price: 70000 },
  { id: 6, name: "Walton Laptop", price: 40000 },
  { id: 7, name: "Vivo Phone", price: 20000 },
  { id: 8, name: "Oppo Phone", price: 15000 },
  { id: 9, name: "Samsung Phone", price: 13000 },
  { id: 10, name: "Xiaomi Phone", price: 12000 },
  { id: 11, name: "Camera", price: 50000 },
  { id: 12, name: "Watch", price: 40000 },
];

function getProducts(Products, search) {
  const matched = [];
  for (const product of Products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = getProducts(Products, "watch");
// console.log(result);
