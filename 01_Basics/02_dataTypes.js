"use strict" //treat all JS code 

// alert(3+3)  This will not run because we are using nodejs not browser
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique
// object

console.table([typeof null , typeof undefined])

/*
Interview Question :- Why is null considered as object data type
In JavaScript, `null` is not technically considered an object, even though it might appear that way in some contexts. `null` is a primitive value in JavaScript, not an object. However, it's a common point of confusion, and it might be asked about in JavaScript interview questions to test your understanding of JavaScript's type system.

Here's a brief explanation of the relationship between `null` and objects in JavaScript:

1. **`null` is a primitive value:** In JavaScript, there are two main categories of values: primitives and objects. Primitives include values like numbers, strings, booleans, `null`, and `undefined`. `null` represents the intentional absence of any object value.

2. **Objects:** In JavaScript, objects are composite data types that can hold key-value pairs. Objects include things like arrays, functions, and regular objects (created with `{}` or `new Object()`). These objects have properties and methods associated with them.

3. **`typeof` operator:** If you use the `typeof` operator on `null`, it will return `"object"`. This is a historical quirk in JavaScript that has been there since the early days, and it's often considered a mistake in the language design.

Here's an example:

```javascript
console.log(typeof null); // "object"
```

This behavior can be confusing because `null` is not an object in the traditional sense; it's a distinct primitive value. It's important to note that this behavior is unlikely to change in JavaScript to maintain backward compatibility.

In JavaScript interviews, you might be asked about this behavior to assess your knowledge of JavaScript's type system and quirks. It's essential to understand that while `typeof null` returns `"object"`, `null` itself is not an object but a primitive value used to represent the absence of an object.
*/