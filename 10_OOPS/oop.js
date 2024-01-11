// const user = {
//   name: "John Doe",
//   loginCount: 9,
//   isPremiumSubcriber: true,
//   getUserDetails: function () {
//     console.log(this);
//   },
// };

// console.log(user.getUserDetails());
// console.log(this);

// Witbout using constructor function
// function user(username, loginCount, isLoggedin) {
//   (this.username = username),
//     (this.loginCount = loginCount),
//     (this.isLoggedin = isLoggedin);

//   return this;
// }

// const userOne = user("Garo", 12, true);
// const userTwo = user("Garo2", 122, false);
// console.log(userOne);

// Using constructor function

// Note:- While using constructor function we do not need to return values as it implicitly returns values by its own

/***
 * Note : - When you use "new" keyword as shown below
 * 1- An empty object is created which is called as "instance"
 * 2- A constructor function is called due to new keyword,it packs all the agruments and returns it to us
 * 3- The Arguments passed is injected on the "this" keyword
 * 4-And at the values are obtained
 *  */
function user2(username, loginCount, isLoggedin) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedin = isLoggedin);

  this.greet = function () {
    console.log(`Welcome user ${this.username}`);
  };

  return this;
}

const userOneNew = new user2("Garo", 12, true);
const userTwoNew = new user2("Garo2", 122, false);
console.log(userOneNew instanceof user2);
console.log(userOneNew instanceof Object);
console.log(userTwoNew.constructor);
