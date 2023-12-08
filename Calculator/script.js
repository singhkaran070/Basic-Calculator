let currentValue = "";
    
function appendValue(value) {
  currentValue += value;
  document.getElementById("result").value = currentValue;
}

function calculate() {
  try {
    const result = eval(currentValue);
    document.getElementById("result").value = result;
    currentValue = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentValue = "";
  }
}
function clearResult() {
  document.getElementById("result").value = "";
  currentValue = "";
}