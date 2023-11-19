let myLang = ["Python", "JavaScript", "Java", "Swift", "Flutter"];
// myLang.forEach(function (item) {
//   console.log(`I can code in ${item}`);
// });
// myLang.forEach((item) => {
//   console.log(`I can code in ${item}`);
// });

// function printMe(item) {
//   console.log(item);
// }

// myLang.forEach(printMe);

myLang.forEach((item, index, arr) => {
  console.log(index, arr, item);
});
