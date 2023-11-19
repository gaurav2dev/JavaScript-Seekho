const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumbers.map((num) => num * 10);
console.table(newNums);

// -----------------Chaining----------------------------
const numz = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const revert = numz
  .map((num) => num + 100)
  .map((num) => num + 1)
  .filter((num) => num % 3 === 0)
  .map((num) => num + 5)
  .map((num) => num + 1);

console.table(revert);
