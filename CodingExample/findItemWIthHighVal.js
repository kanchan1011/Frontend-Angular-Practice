const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
];
const maxPrice = products.reduce((prev, curr) => 
  prev.price > curr.price ? prev : curr
);

console.log("Expensive product: ", maxPrice);

/*
OUTPUT
PS E:\Kanchan\Angular\Assignment\CodingExample> node .\findItemWIthHighVal.js
Expensive product:  { id: 1, name: 'Laptop', price: 50000 }
*/
