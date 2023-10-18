// Note
/* -------------Notes------------- 
1-Arrays are written in "[]" brackets
2-Array can have different types of elements
*/

// let arr1 = [1, 2, [3, 4], "2"];
// let arr2 = [...arr1, 5, 6, "02"];
// let years1 = ["2"];
// let years2 = ["02"];
// console.log(arr2);
// console.log(arr1);
// console.log("2" == "2");
// console.log(arr1[3] == arr2[3]);
// console.log(years1["2"] !== years2["02"]);

const fruits = ["apple", "banana", "chikoo", "mango"];
// fruits[5] = "kiwi";
fruits.push("kiwi", "cherry");
console.log(fruits.keys);
console.log(fruits);
console.log(`Length of array is  ${fruits.length}`);

const heros = new Array("hero", "zero", "kaun..");
console.log(heros.unshift("Dhoni"));
console.log(heros.includes("Dhoni"));
console.log(heros);
const newArr = heros.join();
console.log(newArr);
// Array methods
/* 
JavaScript provides several built-in methods for manipulating arrays. Below is a list of commonly used array methods along with short explanations:

1. **push(element1, element2, ...)**:
   - Adds one or more elements to the end of an array.
   - Returns the new length of the array.

2. **pop()**:
   - Removes the last element from an array.
   - Returns the removed element.

3. **shift()**:
   - Removes the first element from an array.
   - Returns the removed element.
   
4. **unshift(element1, element2, ...)**:
   - Adds one or more elements to the beginning of an array.
   - Returns the new length of the array.

5. **concat(array1, array2, ...)**:
   - Combines two or more arrays into a new array.
   - Does not modify the original arrays.

6. **join(separator)**:
   - Joins all elements of an array into a string, separated by the specified separator.
   - Returns the resulting string.

7. **slice(startIndex, endIndex)**:
   - Creates a shallow copy of a portion of an array, from `startIndex` to `endIndex` (endIndex is not included).
   - Returns a new array.

8. **splice(startIndex, deleteCount, item1, item2, ...)**:
   - Modifies an array by removing, replacing, or adding elements at a specified position.
   - Returns an array of the removed elements.

9. **reverse()**:
   - Reverses the order of elements in an array.
   - Mutates the original array.

10. **sort(compareFunction)**:
    - Sorts the elements of an array in place according to a provided comparison function.
    - Mutates the original array.

11. **map(callback)**:
    - Creates a new array by applying a provided function to each element in the original array.
    - Returns a new array.

12. **filter(callback)**:
    - Creates a new array containing all elements that pass a provided test (callback function).
    - Returns a new array.

13. **reduce(callback, initialValue)**:
    - Applies a callback function to reduce the array to a single value, starting with an initial value.
    - Returns the accumulated result.

14. **forEach(callback)**:
    - Iterates over each element in the array and executes a provided callback function for each.
    - Does not return a new array.

15. **every(callback)**:
    - Checks if every element in the array passes a given test (callback function).
    - Returns `true` if all elements pass, otherwise `false`.

16. **some(callback)**:
    - Checks if at least one element in the array passes a given test (callback function).
    - Returns `true` if at least one element passes, otherwise `false`.

17. **find(callback)**:
    - Returns the first element in the array that passes a given test (callback function).
    - Returns `undefined` if no elements pass.

18. **findIndex(callback)**:
    - Returns the index of the first element in the array that passes a given test (callback function).
    - Returns -1 if no elements pass.

19. **includes(element, fromIndex)**:
    - Checks if an array contains a specific element.
    - Returns `true` if found, otherwise `false`.

20. **indexOf(element, fromIndex)**:
    - Returns the index of the first occurrence of an element in the array.
    - Returns -1 if not found.

These array methods provide powerful tools for working with arrays in JavaScript, making it easier to perform various operations and transformations on your data.
*/
