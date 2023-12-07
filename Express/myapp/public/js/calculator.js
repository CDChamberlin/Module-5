// const { response } = require("express");

const form = document.querySelector("form");

// Equals onClick
function calculates(event) {
  event.preventDefault();
  document.getElementById("result").value = "";
  let haveInputs = true;
  const data = new FormData(form);
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  // console.log(data.get("operator"));
  // Validates inputs... Doesn't check that they are valid numbers.
  if (num1 == NaN) {
    alert("First number missing");
    haveInputs = false;
  }
  if (num2 === "NaN") {
    alert("Second number missing");
    haveInputs = false;
  }
  console.log(
    "Inputs are numbers: " +
      haveInputs +
      "/n Number 1: " +
      num1 +
      "/n Number 2: " +
      num2
  );
  if (haveInputs) {
    // Make sure that there are valid inputs before doing calculations
    switch (data.get("operator")) {
      case "+":
        fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("result").value = data.result;
          });
        break;
      case "-":
        fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("result").value = data.result;
          });
        break;
      case "x":
        fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("result").value = data.result;
          });
        break;
      case "/":
        fetch(`/calculator/divide?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("result").value = data.result;
          });
        break;
    }
  }
  return false;
}
// Clear onClick event
function reset(event) {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
}
