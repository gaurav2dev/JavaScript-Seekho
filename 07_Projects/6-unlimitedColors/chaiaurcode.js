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
