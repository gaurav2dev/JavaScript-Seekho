const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newCart = arr1.reduce((acc, currVal) => {
  console.log(`acc :- ${acc} currVal :- ${currVal}`);
  return acc + currVal;
}, 0);

console.table(newCart);

// const det = arr1.reduce((acc, currVal) => acc + currVal, 0);
// console.table(det);

// const shoppingCart = [
//   { item: "Shirt", price: 20 },
//   { item: "Jeans", price: 40 },
//   { item: "Shoes", price: 50 },
//   { item: "Hat", price: 15 },
// ];

// const myBill = shoppingCart.reduce((acc, currVal) => {
//   return acc + currVal.price;
// }, 0);
// console.log(myBill);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
