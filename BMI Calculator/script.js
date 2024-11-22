function calculateBMI() {
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerText = "Please enter valid values.";
    return;
  }

  var bmi = weight / Math.pow(height / 100, 2);
  document.getElementById("result").innerText =
    "Your BMI is: " + bmi.toFixed(2);
}

function Clear() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").innerText = "";
}
