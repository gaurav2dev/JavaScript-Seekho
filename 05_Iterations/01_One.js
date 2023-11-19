// for loop

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is an even number `);
//   } else {
//     console.log(`${i} is an odd number `);
//   }
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   if (element % 2 == 0) {
//     console.log(`${element} is even `);
//   } else {
//     console.log(`${element} is odd `);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer Loop value  ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// let myArray = ["Flash", "Spider-Man", "Iron Man", "Superman", "Batman"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is best number");
  }
  //console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
  }
}
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
