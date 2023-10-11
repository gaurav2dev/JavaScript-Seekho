/* 
In your code snippet, you've declared a variable `closingBalance` and assigned it the value `5000`. This is a simple assignment of a numeric value to a variable. Now, let's explore some common methods and operations you can perform with numbers and math in JavaScript.

### 1. Basic Arithmetic Operations:
// -----------------------------------------------CODE-----------------------------------------------

You can perform basic arithmetic operations with numbers in JavaScript. For instance, you can use your `closingBalance` variable for these operations:

```javascript
const openingBalance = 3000;
const depositAmount = 2000;

// Addition
const newBalance = closingBalance + depositAmount; // Result: 7000

// Subtraction
const withdrawalAmount = 1000;
const updatedBalance = newBalance - withdrawalAmount; // Result: 6000

// Multiplication
const interestRate = 0.05;
const interestEarned = updatedBalance * interestRate; // Result: 300
```

### 2. Math Object Functions:
// -----------------------------------------------CODE-----------------------------------------------

JavaScript provides a built-in `Math` object with various functions for performing more complex mathematical operations:

```javascript
// Calculate the square root
const squareRoot = Math.sqrt(closingBalance); // Result: 70.71 (approximately)

// Calculate the absolute value
const negativeNumber = -10;
const absoluteValue = Math.abs(negativeNumber); // Result: 10

// Round a number
const unroundedNumber = 6.78;
const roundedNumber = Math.round(unroundedNumber); // Result: 7
```

### 3. Exponentiation:

You can use the exponentiation operator (`**`) to calculate the power of a number:

```javascript
// -----------------------------------------------CODE-----------------------------------------------

const base = 2;
const exponent = 3;
const result = base ** exponent; // Result: 8 (2^3)
```

### 4. Division and Modulus:

You can perform division and obtain the remainder using the division operator and the modulus operator, respectively:

```javascript
// -----------------------------------------------CODE-----------------------------------------------
const dividend = 20;
const divisor = 3;

const quotient = dividend / divisor; // Result: 6.666666666666667
const remainder = dividend % divisor; // Result: 2 (remainder of 20 / 3)
```

These are some of the common methods and operations you can perform with numbers and math in JavaScript. You can use these operations to work with financial data, perform calculations, and solve a wide range of mathematical problems in your JavaScript programs.
*/

// -----------------------------------------------CODE-----------------------------------------------

// const myBalance = new Number(5000000)
// console.log(myBalance);
// console.log(myBalance.toFixed(4));
// console.log(typeof myBalance);

// const closingBalance = 5000
// console.log(closingBalance);
// console.log(closingBalance.toString());
// console.log(closingBalance.toFixed(4));

// const lastDeposit = 123.89543
// console.log(lastDeposit.toPrecision(1));


// const currentBalance = 100000000000000000000
// console.log(currentBalance.toLocaleString('en-IN'));

// -----------------------------------------------CODE-----------------------------------------------


// let myArr =new Array([12,14,16,19,100,1000,9999])
// console.log(myArr);

// console.log(Math.max(12,14,16,19,100,1000,9999))
// console.log(Math.min(12,14,16,19,100,1000,9999))

// console.log(Math.round((Math.random()*10)));

// The Dice Roll Game

// const diceGame = (min,max) =>{
//     return Math.floor(Math.random()*(max-min+1)+min)
// }
// const n = 6
// const randomValue = diceGame(1,6)
// console.log(`The dice roll no is ${randomValue}`);