// // Dividing the promise factor into two parts
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("hello");
//     resolve();
//   }, 1800);
// });

// promise.then(function () {
//   console.log("Promise aaya hai");
// });

// // Performing the promise factor into one part
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I have my idea");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("hey i have done it !!! ");
// });

// // Promise type-3 passing object inside resolve
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Garo", age: 24 });
//   }, 1000);
// });

// promiseThree.then(function (userDet) {
//   console.log(userDet);
// });

// Promise type-4 passing reject as well
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Gaurav@45", password: 1234 });
//     } else {
//       reject("Error !!! Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     // console.log(user);
//     return { username: user.username, password: user.password };
//   })
//   .then((det) => {
//     console.log(det.username);
//     console.log(det.password);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Kaam Khatam");
//   });

// Type-5 - using async and await
// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "JavaScript@45", password: 1234 });
//     } else {
//       reject("Error !!! JS went wrong");
//     }
//   }, 1800);
// });

// using async-await
// async function consumedPromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }
// consumedPromiseFive();

// Using try catch

// async function consumedPromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(`${error}`);
//   }
// }

// consumedPromiseFive();

// async function getAllUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }

// getAllUsers();

async function getAllUsers() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.log(error);
//   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hello I am back");
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log("I am consumed");
// });

// const promise_Two = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let status = true;
//     if (!status) {
//       resolve([
//         {
//           name: "kidney beans",
//           price: 0.58,
//           image: "kidney.jpg",
//           type: "vegetables",
//         },
//         {
//           name: "garden peas",
//           price: 0.52,
//           image: "gardenpeas.jpg",
//           type: "vegetables",
//         },
//       ]);
//     } else {
//       reject("Error has occured");
//     }
//   }, 2000);
// });

// promise_Two
//   .then((users) => {
//     console.log(users[1]); // Accessing the second object in the array
//     return { name: users[1].name, price: users[1].price, type: users[1].type };
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("This is finally block");
//   });
