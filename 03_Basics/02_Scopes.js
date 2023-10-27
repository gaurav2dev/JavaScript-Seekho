/* 
Scope in JavaScript refers to the context in which variables and functions are declared and can be accessed. Understanding scope is crucial for writing clean and maintainable code in JavaScript. There are two primary types of scope in JavaScript: global scope and local scope, which includes function scope and block scope. Let's dive into the details of each:

1. **Global Scope**:
   - Variables declared outside of any function or block have global scope. They can be accessed from anywhere in your code.
   - Variables declared with the `var` keyword in the global context become properties of the global object (usually `window` in a browser environment).
   - Variables declared with `let` or `const` outside of functions and blocks have global scope but do not become properties of the global object.
   - Functions declared globally are also in the global scope and can be accessed from anywhere in your code.

   Example:
   ```javascript
   var globalVar = 10;
   let globalLet = 20;
   
   function globalFunction() {
     console.log(globalVar); // Accessing globalVar from the function
   }
   ```

2. **Function Scope**:
   - Variables declared within a function have function scope, meaning they are accessible only within that function.
   - Variables declared with `var` are function-scoped, which means they "hoist" to the top of the function and are accessible throughout the function.
   - Variables declared with `let` or `const` are also function-scoped but are not hoisted, and they are only accessible within the block in which they are declared.
   - Nested functions create nested scopes, where inner functions can access variables from outer functions.

   Example:
   ```javascript
   function outer() {
     var outerVar = 30;
     let outerLet = 40;
     
     function inner() {
       console.log(outerVar); // Accessing outerVar from the inner function
     }
   }
   ```

3. **Block Scope**:
   - Variables declared with `let` and `const` within a block, such as in a loop or an `if` statement, have block scope.
   - They are accessible only within the block in which they are defined, not outside of it.

   Example:
   ```javascript
   if (true) {
     let blockVar = 50;
     console.log(blockVar); // Accessing blockVar within the block
   }
   console.log(blockVar); // This will result in an error; blockVar is not defined here
   ```

4. **Lexical Scope (Closures)**:
   - Lexical scope refers to the way JavaScript functions create and maintain scope.
   - When a function is defined within another function, the inner function has access to variables from the outer (enclosing) function, creating a closure.

   Example:
   ```javascript
   function outer() {
     var outerVar = 60;
     
     function inner() {
       console.log(outerVar); // Accessing outerVar from the inner function (closure)
     }
     
     return inner;
   }
   var innerFunction = outer();
   innerFunction(); // This still has access to outerVar
   ```

5. **Global Variables and Strict Mode**:
   - In non-strict mode, if a variable is used without being declared, it becomes a global variable.
   - In strict mode, an error is thrown when trying to use an undeclared variable.

   Example:
   ```javascript
   // In non-strict mode, this creates a global variable 'undeclaredVar'
   undeclaredVar = 70;

   // In strict mode, this would throw an error
   'use strict';
   anotherUndeclaredVar = 80; // ReferenceError
   ```

Understanding and managing scope is essential for avoiding unintended variable collisions, keeping your code organized, and ensuring that variables and functions are used in the appropriate context. JavaScript's scoping rules help you achieve this while writing efficient and maintainable code.
*/
//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "john";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "john";
  if (username === "john") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};

addone(5);
console.log(addTwo(5));
