let score = function age(){
    return 0
}
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let isLoggedIn = "Hello"
let typeofsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof(typeofsLoggedIn))
// console.log(typeofsLoggedIn)


// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0
// undefined => NaN
// null => 0
// function => NaN

/*-----------------------Operations------------------------------*/
let a = 5;
let b = 3;
let sum = a + b; // 8
let product = a * b; // 15
let remainder = a % b; // 2
a++; // Increment a by 1
b--; // Decrement b by 1
// console.table([a,b,sum,product,remainder])

let x = 5
// console.log(x+=5);

let str1 = 1
let str2 = "2"
// console.log(typeof(str1 + str2));

let st = true
let st1 = 46
console.log(++st + st1);
// console.log(st + st1);
// console.log(typeof (st + st1));
// console.log(((12*34) + 24 % 45)+ "hello")
// let str3 = str1 + str2 + "45"
// console.log(typeof(str3) , str3); 
// console.log(str3 + 45);
// console.log(Number(str1 + str2));
// let str3 = Number(str1 + str2)
// console.log(typeof(str3));
// console.table([str1 + str2])

/*-------Important Note--------------- */
// Interview Question
/* In Case of ("1" + 2 +2) => 122
In JavaScript, when you use the + operator with strings and numbers, it performs string concatenation from left to right. Here's a step-by-step breakdown of how the expression is evaluated:
"1" is a string.
When you encounter the + operator, JavaScript treats it as a string concatenation operation because one of the operands is a string.
So, "1" is concatenated with 2, resulting in the string "12".
Now, "12" is still a string.
When you encounter the next +, it again performs string concatenation with the remaining 2, resulting in the string "122".
That's why console.log("1" + 2 + 2) outputs "122," as it's a sequence of string concatenations. If you want to perform addition instead, you can use parentheses to change the order of operations:
 ------------------------In Case of (1 + 2 + "3") => 33----------------------------------------------
In the expression `1 + 2 + "3"`, JavaScript follows a different order of evaluation compared to the previous examples.

Here's how this expression is evaluated step by step:

1. `1` and `2` are both numbers, so the `+` operator performs addition. `1 + 2` results in the numeric value `3`.
2. After the addition, you have `3`, which is still a number.
3. When you encounter the `+` operator with `"3"`, JavaScript performs implicit type coercion. It converts the numeric `3` into a string `"3"` to make the operation valid.
4. Finally, `"3"` (the result of the previous addition) is concatenated with the string `"3"`, resulting in the string `"33"`.

So, `console.log(1 + 2 + "3")` will output "33" because the initial numeric addition is followed by string concatenation. JavaScript dynamically converts values as needed to perform the operations, and in this case, it treats the numbers as strings for the final concatenation.

*/