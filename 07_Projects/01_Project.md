# Projects Related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

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