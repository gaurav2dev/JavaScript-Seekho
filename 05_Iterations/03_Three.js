// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   console.log(`${num}`);
// }

// let str = "Gaurav Arv ind Chou bey";
// for (const s of str) {
//   if (s == " ") {
//     console.log(`Space Detected`);
//     continue;
//   }
//   console.log(`${s}`);
// }

const map = new Map();
map.set("INR", "India");
map.set("USD", "United States");
map.set("EUR", "Europe");
for (const [key, value] of map) {
  console.log("Currency", key, ":-", "Country :-", value);
}
// console.log(map);

let myObj = {
  name: "Gaurav",
  age: 28,
  country: "USA",
};

for (const [key, value] of Object.entries(myObj)) {
  console.log(key, " :- ", value);
}
