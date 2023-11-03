// Immediately Invoked Function Expressions (IIFE)
/*---------------------------Notes-------------------------------- */
/* 
IIFE stands for "Immediately Invoked Function Expression" in JavaScript. It's a common design pattern used to 
create a self-contained block of code that runs immediately after it's defined. 
The primary purpose of an IIFE is to create a new scope, 
which helps prevent polluting the global scope with variables and functions.

Here's the basic syntax of an IIFE:

```javascript
(function() {
  // Your code goes here
})();
```

Let's break down how this works:

1. `(function() {` and `})();` define an anonymous function.
2. The function is enclosed in parentheses to ensure it's treated as an expression.
3. The `()` at the end of the expression immediately invokes (runs) the function.

You can also pass arguments to an IIFE:

```javascript
(function(arg1, arg2) {
  // Your code goes here
})(value1, value2);
```

Common use cases for IIFE include:

1. **Encapsulation**: Creating a private scope to avoid polluting the global scope with variables and functions.
2. **Module Pattern**: Creating modules with private and public members.
3. **Isolating Libraries**: Ensuring that a library's code doesn't interfere with the global environment.

Here's an example of an IIFE encapsulating a variable:

```javascript
(function() {
  var counter = 0;

  function increment() {
    counter++;
  }

  function getCounter() {
    return counter;
  }

  increment();
  console.log(getCounter()); // Outputs 1
})();
```

In this example, `counter`, `increment`, and `getCounter` are not accessible in the global scope, providing encapsulation and preventing potential conflicts with other code.

IIFE is a useful tool for maintaining code organization and preventing unintended variable or function name clashes in larger JavaScript applications.
*/

(function chai() {
  //->>>> This is a named IIFE as this function has a name i.e chai()
  console.log(`DB Connected!!`);
})();

((name) => {
  //->>>> This is a simple IIFE as this function has a no name
  console.log(`DB Vapas se connect hua hai ${name}!!!`);
})("Virat");
