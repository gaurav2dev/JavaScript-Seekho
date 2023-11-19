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

// myLang.forEach((item, index, arr) => {
//   console.log(index, arr, item);
// });

// let course = [
//   {
//     name: "HTML",
//     duration: "10 weeks",
//     price: "$10",
//   },
//   {
//     name: "Css",
//     duration: "10 weeks",
//     price: "$12",
//   },
//   {
//     name: "Javascript",
//     duration: "2 months",
//     price: "$18",
//   },
//   {
//     name: "React",
//     duration: "3 months",
//     price: "$45",
//   },
// ];

// const read = (item) => {
//   console.log(
//     `Course :- ${item.name} for duration ${item.duration} only for ${item.price}`
//   );
// };

// course.forEach(read);

var arrayOfObjects = [
  {
    name: "John",
    age: 25,
    city: "New York",
    courseEnrolled: "HTML",
    duration: "10 weeks",
    price: "$10",
  },
  {
    name: "Alice",
    age: 30,
    city: "San Francisco",
    courseEnrolled: "CSS",
    duration: "10 weeks",
    price: "$10",
  },
  {
    name: "Bob",
    age: 22,
    city: "Los Angeles",
    courseEnrolled: "JavaScript",
    duration: "4 months",
    price: "$30",
  },
];

arrayOfObjects.forEach((item) => {
  console.table(item);
});
