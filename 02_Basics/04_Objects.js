// let user = {};

// // set
// user["likes birds"] = true;

// // get
// console.log(user); // true

// let myUser = {
//   name: {
//     first_name: "John",
//     last_name: "Doe",
//   },
//   age: 30,
//   city: "New York",
//   email: "user@netflix.com",
//   isSubscribed: true,
//   isLoggedIn: true,
// };

// console.log(
//   `Firstname:- ${myUser.name?.first_name}  Lastname:- ${myUser.name?.last_name}`
// );

// let userSubcription = {
//   planName: "Netflix",
//   subscriptionDate: new Date(),
//   expiryDate: new Date("2025-12-31"),
//   status: "Active",
//   price: "$9.99",
//   discountCodeApplied: false,
//   totalDiscounts: 0,
// };
// console.log(userSubcription);

// const complete_details = { ...myUser, ...userSubcription };
// const myDate = [Object.entries(complete_details)[5]];
// console.log(myDate);
// console.log(Object.entries(complete_details));
// if (complete_details.hasOwnProperty("age") == false) {
//   console.log("Value nahi hai bhai!!");
// } else {
//   console.log("Har Har Mahadev,Value mil Gayi Yaar!!");
// }
// console.log(Object.keys(complete_details));
// console.log(Object.values(complete_details));
// const obj3 = Object.assign({}, myUser, userSubcription);
// console.log(complete_details.toLocaleString("fr-FR"));
// console.log("Obj3 => ", obj3);

// const number = 12345.6789;
// const options = { style: "currency", currency: "RUB" };
// const localizedNumber = number.toLocaleString("en-IN", options);
// console.log(localizedNumber);

// function myApp(name, age) {
//   return {
//     username: "abc123",
//     name: {
//       full_name: name,
//     },
//     age: age,
//   };
// }
// const player = myApp("Virat Kohli", 50);
// console.log(player);

// Destructuring of Object
const person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    streetAddress: "123 Main St.",
    city: "Anytown",
    state: "CA",
    country: "USA",
    postalCode: "12345",
  },
};

const { firstName: one, lastName: two, address: three } = person;
console.log(one, two, three);
