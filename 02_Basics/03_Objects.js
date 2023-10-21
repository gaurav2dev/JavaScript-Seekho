// 2 ways to declare objects
/* --Notes--
In JavaScript, objects are a fundamental data type that allows you to store and manipulate data. Objects are collections of key-value pairs, where each key is a string (or a Symbol) and the associated value can be of any data type, including other objects. Here's a basic overview of objects in JavaScript:

1. **Creating Objects:**
   You can create objects in several ways:

   - Object literals:
     ```javascript
     const person = { name: "John", age: 30 };
     ```

   - Using the `new` keyword and a constructor function:
     ```javascript
     function Person(name, age) {
       this.name = name;
       this.age = age;
     }
     const john = new Person("John", 30);
     ```

2. **Accessing Object Properties:**
   You can access object properties using dot notation or bracket notation:
   
   ```javascript
   console.log(person.name); // John
   console.log(person["age"]); // 30
   ```

3. **Modifying Object Properties:**
   You can change the value of an object's property by simply assigning a new value to it:

   ```javascript
   person.age = 31;
   ```

4. **Adding and Deleting Properties:**
   You can add new properties and delete existing properties:

   ```javascript
   person.country = "USA"; // Adding a new property
   delete person.age; // Deleting a property
   ```

5. **Looping Through Object Properties:**
   You can loop through an object's properties using `for...in` or `Object.keys()`:

   ```javascript
   for (const key in person) {
     console.log(key, person[key]);
   }
   // or
   const keys = Object.keys(person);
   for (const key of keys) {
     console.log(key, person[key]);
   }
   ```

6. **Object Methods:**
   You can define methods as properties of an object. These methods can perform actions related to the object:

   ```javascript
   const car = {
     brand: "Toyota",
     start: function() {
       console.log(`${this.brand} started.`);
     }
   };
   car.start(); // Toyota started.
   ```

7. **Object Constructor Functions and Prototypes:**
   You can create multiple objects with a shared structure using constructor functions and prototypes. This is a way to implement object-oriented programming in JavaScript.

8. **Object Destructuring:**
   You can extract object properties into variables using object destructuring:

   ```javascript
   const { name, age } = person;
   ```

9. **Tips and Tricks:**

   - Object Shorthand:
     When creating objects with properties that have the same name as the variable you're assigning, you can use shorthand notation:

     ```javascript
     const name = "John";
     const age = 30;
     const person = { name, age };
     ```

   - Computed Property Names:
     You can use computed property names when defining object properties using square brackets:

     ```javascript
     const prop = "dynamicKey";
     const obj = {
       [prop]: "This is a dynamic key"
     };
     ```

   - Object Spread and Rest:
     You can use the spread operator (`...`) to clone objects and merge them:

     ```javascript
     const original = { a: 1, b: 2 };
     const copy = { ...original };
     ```

     You can also use the rest parameter to collect remaining properties:

     ```javascript
     const { a, ...rest } = original;
     ```

   - Object.freeze, Object.seal, and Object.preventExtensions:
     These methods can be used to control the mutability of objects, making them read-only or restricting changes in different ways.

   - JSON.stringify and JSON.parse:
     You can convert objects to JSON strings using `JSON.stringify` and parse JSON strings back into objects using `JSON.parse`.

   - Object.keys, Object.values, and Object.entries:
     These methods can be used to get arrays of an object's keys, values, and key-value pairs, respectively.

   Understanding objects is essential for working with JavaScript, and mastering them will enable you to efficiently manage and manipulate data in your applications.
// Objects are collections of properties and values. They can be used to store data in a structured format, allowing you to access the stored information
/How many ways are there to declare objects ?
There are two main ways of declaring objects in JavaScript: using the object literal syntax and using the Object constructor.
*/
//

const mySym = Symbol("key-1");

let myUser = {
  name: "John",
  age: 30,
  city: "New York",
  email: "user@netflix.com",
  isSubscribed: true,
  isLoggedIn: true,
};

let userPaymentDetails = {
  name: "john",
  fullname: "Doe",
  [mySym]: "key-1",
  payment_mode: "UPI@oksbi",
  monthSubscribe: 3,
  subscription_Expiry: "26/10/24",
};

let userDetails = { ...myUser, ...userPaymentDetails };
console.log(userDetails);
console.log(userDetails.name);
console.log(userDetails["email"]);
console.log(`User name :- ${userDetails.name} ${userPaymentDetails.fullname}`);
console.log(userPaymentDetails.mySym);

let me = new Object();
me = {
  age: 24,
  name: "ABC",
  data: "4-3-2000",
};

me.isuserAdmin = true;
console.log(me);
