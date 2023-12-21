let clock = document.querySelector("#clock");
let day = document.getElementById("day");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  day.innerHTML = date;
}, 1000);
