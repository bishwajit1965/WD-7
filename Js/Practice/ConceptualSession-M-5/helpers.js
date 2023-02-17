// Get the text field value
function getTextStringValue(id) {
  const textField = document.getElementById(id);
  const textFieldValueString = textField.innerText;
  const textFieldValue = parseFloat(textFieldValueString);
  return textFieldValue;
}

// Get the input field value
function getInputFieldValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

// Set price for items of valentine gift
function setPrice(id, value) {
  document.getElementById(id).innerText = value;
}

// Get hold of element
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// Get the color value
function getColorValue(id) {
  const colorField = document.getElementById(id);
  const colorValue = colorField.value;
  return colorValue;
}
