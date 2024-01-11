function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

chai.printMe();

console.log(chai instanceof Object);
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/*
Certainly! Let's break down what happens behind the scenes when the `new` keyword is used in JavaScript in simpler terms:

1. **New Object is Created:**
   - Think of it like opening a fresh blank notebook. The `new` keyword tells JavaScript to create a brand new object.

2. **Prototype is Linked:**
   - Imagine this new object is like a student in a class. The `prototype` is like the teacher's notes that the student can refer to. The new object is linked to these notes so it can access shared information.

3. **Constructor is Called:**
   - Now, there's a special function (constructor) that's like a guide for creating the object. It's called to set up things for the new object. It's like a teacher giving instructions to a student.

4. **Object is Returned:**
   - After following the instructions, if the teacher (constructor) doesn't explicitly say otherwise, the new object is considered ready. It's like the student completing the setup according to the teacher's guidance.

So, using `new` is like creating a new student in the class (object), connecting them to the shared class notes (prototype), letting the teacher (constructor) guide them through setup, and finally, getting a ready student back.

*/
