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


## Project-4(Guess the Game) Solution

``` javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## Project 5 (Keyboard)

``` javascript

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

const start_change = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stop_change = function () {
  clearInterval(intervalID, 500);
  intervalID = null;
  console.log("STOPPED");
};
document.querySelector("#start-change").addEventListener("click", start_change);
document.querySelector("#stop-change").addEventListener("click", stop_change);

```

## Project 6 (Unlimited Colors)

```javascript

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<div class = "color">
    <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
     </tr>
    </table>
    </div>
    `;
});

```

