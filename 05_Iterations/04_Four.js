const myObject = {
  name: "Gaurav",
  age: 28,
  country: "USA",
  salary: 9999999999999999,
};

for (const key in myObject) {
  console.log(`${key} :-  ${myObject[key]}`);
}

const myArray = ["Apple", "Banana", "Mango", "Kiwi"];
for (const key in myArray) {
  console.log(myArray[key]);
}
