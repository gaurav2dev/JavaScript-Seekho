/*
Certainly! Here's an explanation of functions in JavaScript at different levels of expertise, along with some tips and tricks for each level.

**Beginner Level:**

1. **What is a Function?**
   - A function in JavaScript is a reusable block of code that performs a specific task.
   - It helps in breaking down complex problems into smaller, manageable parts.

2. **Function Declaration:**
   - Functions can be declared using the `function` keyword followed by a name, parameters, and a block of code.
   - Functions can take arguments, perform a task, and optionally return a value.

   ```javascript
   function greet(name) {
     console.log(`Hello, ${name}!`);
   }
   ```

3. **Function Invocation:**
   - You call a function by using its name followed by parentheses.
   - Arguments are passed inside the parentheses when calling a function.

   ```javascript
   greet("John"); // Output: "Hello, John!"
   ```

4. **Return Statement:**
   - Functions can return values using the `return` statement.
   - You can store the returned value in a variable.

   ```javascript
   function add(a, b) {
     return a + b;
   }
   const result = add(2, 3); // result is 5
   ```

**Intermediate Level:**

5. **Function Expression:**
   - Functions can be defined as expressions and assigned to variables.
   - These are often referred to as "anonymous functions."

   ```javascript
   const greet = function(name) {
     console.log(`Hello, ${name}!`);
   };
   ```

6. **Arrow Functions (ES6):**
   - Arrow functions provide a concise way to write functions, especially when they have a single expression in the body.

   ```javascript
   const greet = name => console.log(`Hello, ${name}!`);
   ```

7. **Function Scope:**
   - Functions have their own scope, and variables declared inside functions are not accessible outside of them.
   - Use `let` and `const` for variables within a function to avoid unexpected behavior.

8. **Callback Functions:**
   - Functions can be passed as arguments to other functions.
   - They are commonly used for asynchronous operations and event handling.

   ```javascript
   function fetchData(callback) {
     // Perform async operation
     callback(data);
   }
   ```

**Advanced Level:**

9. **Closures:**
   - Functions in JavaScript can create closures, allowing them to "remember" their lexical scope even after they finish executing.
   - This is used in encapsulation and data hiding.

10. **Functional Programming:**
    - Functions are a core concept in functional programming.
    - You can use higher-order functions like `map`, `filter`, and `reduce` to manipulate data.

11. **Immediately Invoked Function Expressions (IIFE):**
    - IIFE is a way to create a private scope and avoid polluting the global scope.
    - It's used to encapsulate code and avoid naming conflicts.

   ```javascript
   (function() {
     // Your code here
   })();
   ```

12. **Function Prototypes and Object-Oriented Programming:**
    - Functions can be used as constructors to create objects with shared properties and methods using prototypes.
    - This is a fundamental concept in JavaScript's approach to object-oriented programming.

   ```javascript
   function Person(name) {
     this.name = name;
   }
   Person.prototype.greet = function() {
     console.log(`Hello, my name is ${this.name}`);
   };
   const john = new Person("John");
   john.greet(); // Outputs: "Hello, my name is John"
   ```

**Tips and Tricks for All Levels:**

- Choose meaningful names for functions and parameters to improve code readability.
- Comment your functions to describe what they do, their input, and output.
- Keep functions small and focused on a single task (the Single Responsibility Principle).
- Test your functions with various inputs to ensure they work as expected.
- Be mindful of the use of `this` in functions, especially in methods and callback functions.

Remember, JavaScript functions are a powerful and versatile feature. As you progress in your programming journey, you'll discover more ways to leverage them to solve complex problems and write clean, maintainable code.

Certainly, here are some "cheat codes" or handy tips and tricks for working with functions in JavaScript:

**1. Function Shortcuts:**

   - Use arrow functions when the function body contains a single expression:

     ```javascript
     const add = (a, b) => a + b;
     ```

   - For simple, one-line functions, you can use concise arrow functions without curly braces and return statement:

     ```javascript
     const greet = name => `Hello, ${name}!`;
     ```

**2. Default Parameters (ES6):**

   - You can set default values for function parameters:

     ```javascript
     function greet(name = "Guest") {
       console.log(`Hello, ${name}!`);
     }
     ```

**3. Rest Parameters (ES6):**

   - Use the rest parameter to accept a variable number of arguments as an array:

     ```javascript
     function sum(...numbers) {
       return numbers.reduce((acc, num) => acc + num, 0);
     }
     ```

**4. Spread Operator (ES6):**

   - Spread the elements of an array or object as arguments to a function:

     ```javascript
     const numbers = [1, 2, 3];
     const max = Math.max(...numbers);
     ```

**5. Destructuring Parameters (ES6):**

   - You can destructure objects and arrays directly in function parameters:

     ```javascript
     function printFullName({ firstName, lastName }) {
       console.log(`${firstName} ${lastName}`);
     }
     ```

**6. Immediately Invoked Function Expressions (IIFE):**

   - Use IIFE to create a private scope:

     ```javascript
     (function() {
       // Your private code here
     })();
     ```

**7. Function Composition:**

   - Compose functions to create new functions that perform multiple tasks in a sequence:

     ```javascript
     const compose = (f, g) => x => f(g(x));
     const addOne = x => x + 1;
     const double = x => x * 2;
     const addOneAndDouble = compose(double, addOne);
     ```

**8. Callback Hell Avoidance:**

   - To avoid callback hell (nested callbacks), consider using `async/await` with Promises for more readable asynchronous code:

     ```javascript
     async function fetchData() {
       try {
         const data = await fetch("https://example.com/data.json");
         const result = await data.json();
       } catch (error) {
         console.error(error);
       }
     }
     ```

**9. Function Memoization:**

   - Use memoization to cache function results and improve performance for expensive computations.

     ```javascript
     const memoize = (func) => {
       const cache = new Map();
       return (...args) => {
         const key = args.join("-");
         if (cache.has(key)) {
           return cache.get(key);
         }
         const result = func(...args);
         cache.set(key, result);
         return result;
       };
     };
     ```

**10. Use Higher-Order Functions:**

   - Embrace higher-order functions like `map`, `filter`, and `reduce` for efficient data manipulation:

     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const squaredNumbers = numbers.map(x => x ** 2);
     const evenNumbers = numbers.filter(x => x % 2 === 0);
     const sum = numbers.reduce((acc, num) => acc + num, 0);
     ```

These "cheat codes" and techniques can make your code more efficient, concise, and readable. They are part of the developer's toolkit for solving problems and writing clean JavaScript code.
*/
// -----------------------Code----------------------------------

/*
1. Function Shortcuts:

Use arrow functions when the function body contains a single expression:

javascript
Copy code
const add = (a, b) => a + b;
For simple, one-line functions, you can use concise arrow functions without curly braces and return statement:

javascript
Copy code
const greet = name => `Hello, ${name}!`;
2. Default Parameters (ES6):

You can set default values for function parameters:

javascript
Copy code
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
3. Rest Parameters (ES6):

Use the rest parameter to accept a variable number of arguments as an array:

javascript
Copy code
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
4. Spread Operator (ES6):

Spread the elements of an array or object as arguments to a function:

javascript
Copy code
const numbers = [1, 2, 3];
const max = Math.max(...numbers);
5. Destructuring Parameters (ES6):

You can destructure objects and arrays directly in function parameters:

javascript
Copy code
function printFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}
6. Immediately Invoked Function Expressions (IIFE):

Use IIFE to create a private scope:

javascript
Copy code
(function() {
  // Your private code here
})();
7. Function Composition:

Compose functions to create new functions that perform multiple tasks in a sequence:

javascript
Copy code
const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const double = x => x * 2;
const addOneAndDouble = compose(double, addOne);
8. Callback Hell Avoidance:

To avoid callback hell (nested callbacks), consider using async/await with Promises for more readable asynchronous code:

javascript
Copy code
async function fetchData() {
  try {
    const data = await fetch("https://example.com/data.json");
    const result = await data.json();
  } catch (error) {
    console.error(error);
  }
}
9. Function Memoization:

Use memoization to cache function results and improve performance for expensive computations.

javascript
Copy code
const memoize = (func) => {
  const cache = new Map();
  return (...args) => {
    const key = args.join("-");
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
};
10. Use Higher-Order Functions:

Embrace higher-order functions like map, filter, and reduce for efficient data manipulation:

javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x ** 2);
const evenNumbers = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);
*/

// function myName() {
//   console.log("G");
//   console.log("A");
//   console.log("U");
//   console.log("R");
//   console.log("A");
//   console.log("V");
// }
// myName();

// function details(name, age, city, salary) {
//   console.log(
//     `My name is ${name}, I am ${age} , I live in ${city} , I earn ${salary}`
//   );
// }
// details("Gaurav", 25, "Mumbai", 990000000);

// Remember the difference between parameters and arguments in the functions
/* 
Parameters :- Parameters are those that are passed during function definitiom
Arguments ::- Arguments are what we pass when calling a function
*/

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
//   //   let result = num1 + num2;
//   //   return result;
// }
// const add = (a, b) => {
//   console.log(a + b);
//   console.log(typeof b);
// };

// const result = addTwoNumbers(45, 45);
// console.log(result);
// add(8, 9);

// function isUserLoggedIn(username = "user") {
//   if (!username) {
//     console.log("Username de bhai!!!");
//     return;
//   }
//   return `${username} Welcome bhai maza aa gya`;
// }
// console.log(isUserLoggedIn());

// function isGhost(response) {
//   if (response == "yes") {
//     console.log(`श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि
//         बरनऊं रघुबर बिमल जसु जो दायकु फल चारि
//         बुद्धिहीन तनु जानिके सुमिरौं पवन कुमार
//         बल बुद्धि बिद्या देहु मोहिं हरहु कलेस बिकार
//         जय हनुमान ज्ञान गुन सागर
//         जय कपीस तिहुं लोक उजागर
//         रामदूत अतुलित बल धामा
//         अंजनि पुत्र पवनसुत नामा
//         महाबीर बिक्रम बजरंगी
//         कुमति निवार सुमति के संगी
//         कंचन बरन बिराज सुबेसा
//         कानन कुंडल कुंचित केसा
//         हाथ बज्र औ ध्वजा बिराजै
//         कांधे मूंज जनेऊ साजै
//         संकर सुवन केसरीनंदन
//         तेज प्रताप महा जग बन्दन
//         विद्यावान गुनी अति चातुर
//         राम काज करिबे को आतुर
//         प्रभु चरित्र सुनिबे को रसिया
//         राम लखन सीता मन बसिया
//         सूक्ष्म रूप धरि सियहिं दिखावा
//         बिकट रूप धरि लंक जरावा
//         भीम रूप धरि असुर संहारे
//         रामचंद्र के काज संवारे
//         लाय सजीवन लखन जियाये
//         श्रीरघुबीर हरषि उर लाये
//         रघुपति कीन्ही बहुत बड़ाई
//         तुम मम प्रिय भरतहि सम भाई
//         सहस बदन तुम्हरो जस गावैं
//         अस कहि श्रीपति कंठ लगावैं
//         सनकादिक ब्रह्मादि मुनीसा
//         नारद सारद सहित अहीसा
//         जम कुबेर दिगपाल जहां ते
//         कबि कोबिद कहि सके कहां ते
//         तुम उपकार सुग्रीवहिं कीन्हा
//         राम मिलाय राज पद दीन्हा
//         तुम्हरो मंत्र बिभीषन माना
//         लंकेस्वर भए सब जग जाना
//         जुग सहस्र जोजन पर भानू
//         लील्यो ताहि मधुर फल जानू
//         प्रभु मुद्रिका मेलि मुख माहीं
//         जलधि लांघि गये अचरज नाहीं
//         दुर्गम काज जगत के जेते
//         सुगम अनुग्रह तुम्हरे तेते
//         राम दुआरे तुम रखवारे
//         होत न आज्ञा बिनु पैसारे
//         सब सुख लहै तुम्हारी सरना
//         तुम रक्षक काहू को डर ना
//         आपन तेज सम्हारो आपै
//         तीनों लोक हांक तें कांपै
//         भूत पिसाच निकट नहिं आवै
//         महाबीर जब नाम सुनावै
//         नासै रोग हरै सब पीरा
//         जपत निरंतर हनुमत बीरा
//         संकट तें हनुमान छुड़ावै
//         मन क्रम बचन ध्यान जो लावै
//         सब पर राम तपस्वी राजा
//         तिन के काज सकल तुम साजा
//         और मनोरथ जो कोई लावै
//         सोइ अमित जीवन फल पावै
//         चारों जुग परताप तुम्हारा
//         है परसिद्ध जगत उजियारा
//         साधु संत के तुम रखवारे
//         असुर निकंदन राम दुलारे
//         अष्ट सिद्धि नौ निधि के दाता
//         अस बर दीन जानकी माता
//         राम रसायन तुम्हरे पासा
//         सदा रहो रघुपति के दासा
//         तुम्हरे भजन राम को पावै
//         जनम-जनम के दुख बिसरावै
//         अन्तकाल रघुबर पुर जाई
//         जहां जन्म हरि भक्त कहाई
//         और देवता चित्त न धरई
//         हनुमत सेइ सर्ब सुख करई
//         संकट कटै मिटै सब पीरा
//         जो सुमिरै हनुमत बलबीरा
//         जै जै जै हनुमान गोसाईं
//         कृपा करहु गुरुदेव की नाईं
//         जो सत बार पाठ कर कोई
//         छूटहि बंदि महा सुख होई
//         जो यह पढ़ै हनुमान चालीसा
//         होय सिद्धि साखी गौरीसा
//         तुलसीदास सदा हरि चेरा
//         कीजै नाथ हृदय मंह डेरा
//         कीजै नाथ हृदय मंह डेरा
//         पवन तनय संकट हरन मंगल मूरति रूप
//         राम लखन सीता सहित हृदय बसहु सुर भूप`);
//   }
//   return `har har mahadev!!!`;
// }

// console.log(isGhost("yes"));

// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(299, 3999, 5999));

const SubscribedUser = {
  names: "John",
  ages: 25,
  isUser: "yes",
  price: 599,
};

const normalUser = {
  names: "abx",
  ages: 28,
  isUser: "no",
};

function handleData(anyobj) {
  return `${anyobj.names} has age ${anyobj.ages} is user ${anyobj.isUser}`;
}

console.log(handleData(normalUser));
console.log(handleData(SubscribedUser));

const myCart = ["shirt", "jeans", "cap"];

function getCartItems(getArray) {
  return getArray;
}

console.log(getCartItems(myCart));
