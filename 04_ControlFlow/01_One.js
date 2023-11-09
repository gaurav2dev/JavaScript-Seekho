// const isUserLoggedIn = false;

// const userDetails = {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   isUserLogin: false,
// };

// const subcriptionDetails = {
//   isSubscribed: false,
//   planName: "Premium Plan",
//   price: 99,
// };

// const completeDetails = { ...isUserLoggedIn, ...subcriptionDetails };

// if (this.userDetails.isUserLogin & this.subcriptionDetails.isSubscribed) {
//   console.log("Hello Welcome to the js mastery");
// } else {
//   console.log("Please buy our plans");
// }

// const x = 12;
// const result = x > 10 ? "Bada hai Bhai" : "Chota hai bhai";
// console.log(result);

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

// if (
//   complete_details.hasOwnProperty("age") == true &&
//   complete_details.hasOwnProperty("status") == true
// ) {
//   console.log("You are allowed to access the sale earlier");
// } else {
//   console.log("You are not allowed to access the sale earlier");
// }

// if
const isUserloggedIn = true;
const temperature = 41;

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
