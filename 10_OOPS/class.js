// // ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tea", "tea@gmail.com", "123");

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());
class Person {
  constructor(name, email, pswd) {
    this.name = name;
    this.email = email;
    this.pswd = pswd;
  }
}

class Income {
  constructor(personInstance, spend, earn) {
    this.person = personInstance;
    this.spend = spend;
    this.earn = earn;
  }

  displayPersonInfo() {
    console.log("Person Information:");
    console.log("Name:", this.person.name);
    console.log("Email:", this.person.email);
    console.log("Password:", this.person.pswd);
  }
}

// Creating an instance of Person
const me = new Person("me", "me@me", 123);

// Creating an instance of Income and passing the Person instance
const myIncome = new Income(me, 500, 1000);

// Accessing and displaying Person information from Income class
myIncome.displayPersonInfo();
console.log("Spend:", myIncome.spend);
console.log("Earn:", myIncome.earn);
