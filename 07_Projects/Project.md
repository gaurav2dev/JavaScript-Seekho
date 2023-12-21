# Projects Related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-upmzhg?file=1-colorChanger%2Fchaiaurcode.js)

## Solution Code
## Project 1(Color Changer) 

```javascript
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellowgreen') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// Second Solution(Using Switch Case)
// const cool = e.target.id;
// switch (cool) {
//   case 'grey':
//     body.style.backgroundColor = 'grey';
//     break;
//   case 'white':
//     body.style.backgroundColor = 'white';
//     break;
//   case 'blue':
//     body.style.backgroundColor = 'blue';
//     break;
//   case 'yellow':
//     body.style.backgroundColor = 'yellow';
//     break;
//   default:
//     body.style.backgroundColor = 'yellowgreen';
//     break;
// }

```

## Project 2(BMI Calculator) Solution

``` javascript

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter Valid Details ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter Valid Details ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // To Display message Based on Category(Assignment)
    let bmiCategory;
    if (bmi < 18.6) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiCategory = "Normal Range";
    } else {
      bmiCategory = "Overweight";
    }
    results.style.color = "black";
    results.innerHTML = `<h1>${bmi}</h1> <p>${bmiCategory}</p>`;
  }
});
```
## Project 3(Digital Clock) Solution

``` javascript
let clock = document.querySelector("#clock");
let day = document.getElementById("day");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  day.innerHTML = date;
}, 1000);

```