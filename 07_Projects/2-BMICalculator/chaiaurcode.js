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
