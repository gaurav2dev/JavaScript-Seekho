// console.log(Math.PI);
const desc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desc);

const tea = {
  name: "Chai",
  taste: "strong",
  price: 249,
  isAvailable: true,
  isReady: function made() {
    console.log("Code fatt gya");
  },
};

console.log(Object.getOwnPropertyDescriptor(tea, "price"));
Object.defineProperty(tea, "price", { writable: false, enumerable: true });
console.log(Object.getOwnPropertyDescriptor(tea, "price"));

for (const [key, value] of Object.entries(tea)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
