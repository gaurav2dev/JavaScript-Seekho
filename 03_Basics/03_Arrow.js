/* 
In JavaScript, the "this" keyword is a special identifier that refers to the current object, or more precisely, the object on which a method or function is currently being called. The value of "this" is determined by how a function is called, and it can vary in different contexts. Understanding the value of "this" is crucial for working with object-oriented code and event handling in JavaScript.

The value of "this" can be different depending on how a function is called:

1. In the global context:
   - When "this" is used in the global scope (outside any function or object), it refers to the global object, which is usually "window" in a web browser or "global" in Node.js.

2. Inside a function:
   - When "this" is used in a regular function (not an arrow function), its value is determined by how the function is called. If the function is called as a method of an object, "this" refers to that object. If it's called directly or without an object, "this" refers to the global object (usually "window").

3. Inside an object method:
   - When "this" is used inside a method of an object, it refers to the object that the method is called on.

Here's an example to illustrate how "this" works:
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // "John Doe"
```

In this example, when the `fullName` method is called on the `person` object, "this" refers to the `person` object, allowing us to access its properties.

It's important to note that arrow functions have a different behavior for "this" compared to regular functions. In arrow functions, "this" is determined by the context in which the function is defined and doesn't change when the function is called. Arrow functions do not have their own "this" binding.

Understanding "this" and its behavior is essential for writing JavaScript code that works as expected, especially when dealing with object-oriented programming and event handling.

*/

// create a object for user
// const user = {
//   username: "John",
//   age: 30,
//   isSubcribed: true,
//   platform: "Netflix",
//   amount: 999,
//   welcomemessage: function () {
//     console.log(`Welcome ${this.username}! to the wesbite`);
//   },
// };

// function book() {
//   let usernames = "doe";
//     console.log(this.usernames);
//     console.log(this);
// }

// const book = function name() {
//   const usernames = "abc";
//   console.log(this.usernames);
// };

// const book = () => {
//   const usernames = "abc";
//   console.log(this);
// };
// book();

// user.welcomemessage();
// user.username = "virat";
// user.welcomemessage();
// console.log(this);

// const obj = {
//   normalFunction: function () {
//     console.log(this); // Refers to the obj
//   },
//   arrowFunction: () => {
//     console.log(this); // Refers to the surrounding context (e.g., global scope)
//   },
// };

// obj.normalFunction(); // Logs the obj
// obj.arrowFunction(); // Logs the global object (window in a browser, or the surrounding context)

// Note :- If you use {} in arrow functions you need to use return keyword
// Note:- If you use () in arrow function you do not need to use the return keyboard

// Explicit return of arrow functions as return keyword is typed explicitly
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(24, 245));

// Implicit return of arrow functions as no "return" keyword is needed
const oneAdd = (num1, num3) => num1 + num3;
console.log(oneAdd(23, 2443));
