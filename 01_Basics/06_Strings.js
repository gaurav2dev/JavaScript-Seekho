/* 
Strings in JavaScript are sequences of characters, and they are used to represent and manipulate text data. Modern JavaScript syntax includes a feature called string interpolation, which allows you to embed expressions or variables directly within a string. This feature makes it easier to create dynamic and readable strings. Here's a comprehensive explanation of strings in JavaScript with a focus on modern syntax and interpolation:

String Creation:
You can create strings in JavaScript using single quotes (') or double quotes ("). Here are examples of string creation:
*/
let singleQuoted = 'This is a single-quoted string.';
let doubleQuoted = "This is a double-quoted string.";
console.log(singleQuoted,doubleQuoted);

/* 
You can also create multi-line strings using backticks (`), which is a feature introduced in ECMAScript 6 (ES6):
*/

let multiLineString = `
This is a multi-line string.
It can span multiple lines.
`;
console.log(multiLineString);

/* 
String Interpolation (Template Literals):
String interpolation, also known as template literals, allows you to embed expressions or variables within a string using ${} within backticks. This makes it easy to create dynamic strings:
*/

let name = "Alice";
let greeting = `Hello, ${name}!`; // String interpolation
console.log(greeting); // Output: "Hello, Alice!"
// You can include any valid JavaScript expression inside ${}:
let num1 = 5;
let num2 = 7;
let result = `${num1} + ${num2} = ${num1 + num2}`; // Expressions within interpolation
console.log(result); // Output: "5 + 7 = 12"

// String Methods:
// JavaScript provides a wide range of methods for working with strings. Here are some commonly used methods:

// length: Returns the length of the string.
// charAt(index): Returns the character at the specified index.
// substring(start, end): Returns a substring between the start and end indices.
// slice(start, end): Similar to substring but supports negative indices.
// indexOf(searchValue): Returns the index of the first occurrence of searchValue.
// toUpperCase(): Converts the string to uppercase.
// toLowerCase(): Converts the string to lowercase.
// trim(): Removes whitespace from the beginning and end of the string.
// split(separator): Splits the string into an array of substrings based on the separator.
// Example:


let text = "   Hello, World!   ";
let trimmedText = text.trim(); // "Hello, World!"
// String Escaping:
// You can use escape sequences to include special characters within strings. Common escape sequences include \', \", \\, \n (newline), and \t (tab).
let escapedString = "This is a \"quoted\" string.";


// String Concatenation:
// You can concatenate strings using the + operator or by simply placing them next to each other:

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenation

// String Immutability:
// Strings in JavaScript are immutable, which means you cannot change the characters of a string directly. Instead, you create new strings when modifying existing ones.

let originalString = "Hello";
let modifiedString = originalString + ", World!";
// These are some of the fundamental aspects of working with strings in JavaScript, including modern syntax and string interpolation. Understanding these concepts will help you effectively handle text data in your JavaScript applications.

let myName = new String ("GauravAtHisBest")
let my = new String ("Home String")
let nane = "GauravAtHisBest"
// console.log(myName.__proto__);
console.log(myName);
console.log(myName.toUpperCase());
console.log(myName.toLocaleUpperCase('fr-FR'));
console.log(myName.toLocaleUpperCase('TR'));
console.log(my.trim());
console.log(my.trimStart());
console.log(my.trimEnd());
console.log(myName.valueOf());
console.log(my.valueOf());
let myLink = "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
console.log(myLink.replace("mozilla" , "habibi"));
console.log(myName.split("-"));