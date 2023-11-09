let name = "hit";
let anothername = name;
anothername = "data";
console.log(anothername);
console.log(name);

// Note :- Call by value and Call by ref
/* 
In JavaScript, memory management is abstracted from developers to a large extent, unlike in languages like C++ or C#. However, understanding the concepts of stack and heap memory can still be useful for understanding how JavaScript manages memory under the hood.

1. **Stack Memory:**
   - **Function Call Stack:** JavaScript uses a call stack to manage function calls. When a function is called, a new frame is added to the call stack, and when a function returns, its frame is removed from the stack.
   - **Primitive Data Types:** JavaScript stores primitive data types (e.g., numbers, booleans, strings) directly in the stack. These values have a fixed size, so they are allocated and deallocated quickly.

   Example:
   ```javascript
   function add(a, b) {
       return a + b;
   }

   let result = add(5, 3);
   ```
   In this example, when `add(5, 3)` is called, a new frame for `add` is pushed onto the stack, and when it returns, the frame is popped off.

2. **Heap Memory:**
   - **Dynamic Memory Allocation:** Objects, arrays, and other non-primitive data types are stored in the heap. The heap is a region of memory where data of varying sizes can be allocated and deallocated at runtime.
   - **Reference Types:** Instead of storing the actual data in variables, JavaScript stores references (memory addresses) to objects in the heap. This allows for flexibility and efficient memory management.

   Example:
   ```javascript
   let obj1 = { name: "John" };
   let obj2 = obj1; // obj2 now references the same object as obj1
   ```

   In this example, `obj1` and `obj2` both reference the same object in the heap, but their values are stored in the stack.

3. **Garbage Collection:**
   JavaScript has a built-in garbage collector that periodically checks for objects in the heap that are no longer reachable. When an object is no longer referenced by any part of your code, it becomes eligible for garbage collection, and its memory is freed. Developers don't need to explicitly manage memory deallocation in JavaScript.

It's important to note that JavaScript abstracts low-level memory management details, making it easier to write code. However, developers still need to be mindful of memory usage to prevent issues like memory leaks. Circular references (when objects reference each other) can also prevent objects from being garbage collected, so it's essential to be aware of such cases and avoid them. Modern JavaScript engines have sophisticated memory management systems that optimize performance and memory usage.
*/
//
let userOne = {
  email: "abc@gmail.com",
  pswd: "1234",
  phone: 1234,
};
let userTwo = userOne;

// console.log(userTwo);

userTwo.email = "zdj@gmail.com";
console.log(userOne);
// console.log(userTwo);

// Data Types
/* 
In JavaScript, data types can be categorized into two groups: primitive data types and non-primitive (reference) data types.

**Primitive Data Types:**

1. **Number:** Represents both integer and floating-point numbers. Example: `let num = 42;`

2. **String:** Represents sequences of characters, enclosed in single or double quotes. Example: `let str = "Hello, World!";`

3. **Boolean:** Represents true or false values. Example: `let isTrue = true;`

4. **Undefined:** Represents a variable that has been declared but has not been assigned a value. Example: `let x;`

5. **Null:** Represents the intentional absence of any object value or no value at all. Example: `let y = null;`

6. **Symbol (ES6):** Represents a unique and immutable value, often used as object property keys. Example: `const sym = Symbol('description');`

7. **BigInt (ES11):** Represents large integers that can't be represented by the `Number` type. Example: `const bigInt = 1234567890123456789012345678901234567890n;`

**Non-Primitive (Reference) Data Types:**

1. **Object:** Represents a collection of key-value pairs (properties). Objects can hold various data types and functions. Example: 

   ```javascript
   let person = {
       name: "John",
       age: 30
   };
   ```

2. **Array:** A special type of object used to store ordered collections of values. Example: `let numbers = [1, 2, 3, 4, 5];`

3. **Function:** A callable object that can be used to define and execute reusable blocks of code. Functions are also objects in JavaScript. Example:

   ```javascript
   function greet(name) {
       return `Hello, ${name}!`;
   }
   ```

**Call by Value and Call by Reference in JavaScript:**

JavaScript uses a mechanism that is often described as "call by sharing" or "call by assignment," which can be somewhat different from traditional call by value and call by reference. It's important to understand how this works:

1. **Call by Value (Primitive Types):**
   - When a primitive data type (e.g., number, string, boolean) is passed as an argument to a function, a copy of the value is passed.
   - Changes made to the parameter inside the function do not affect the original value outside the function.

   Example:
   ```javascript
   function modifyValue(x) {
       x = x + 1;
   }

   let num = 5;
   modifyValue(num);
   console.log(num); // Output: 5 (unchanged)
   ```

2. **Call by Sharing (Reference Types):**
   - When an object (including arrays and functions) is passed as an argument to a function, a reference to the object in memory is passed, not a copy of the object.
   - Changes made to the object's properties or elements inside the function affect the original object outside the function.

   Example:
   ```javascript
   function modifyObject(obj) {
       obj.name = "Alice";
   }

   let person = { name: "Bob" };
   modifyObject(person);
   console.log(person.name); // Output: "Alice" (modified)
   ```

In summary, JavaScript uses call by value for primitive types, where a copy of the value is passed, and call by sharing for reference types, where a reference to the object is passed. Understanding these concepts is essential for effective JavaScript programming.
*/
