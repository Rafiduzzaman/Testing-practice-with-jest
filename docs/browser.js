// Task 1: String Length
function stringLength(string) {
  const length = string.length;
  if (length < 1 || length > 10) {
    throw new Error("String must be between 1 and 10 characters long.");
  }
  return length;
}

document.getElementById('lengthForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('inputString').value;
  const resultDiv = document.getElementById('resultLength');
  try {
    const len = stringLength(input);
    resultDiv.textContent = `Length: ${len}`;
  } catch (err) {
    resultDiv.textContent = err.message;
  }
});

// Task 2: Reverse String
function reverseString(string) {
  return string.split('').reverse().join('');
}

document.getElementById('reverseForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('reverseInput').value;
  const resultDiv = document.getElementById('resultReverse');
  resultDiv.textContent = `Reversed: ${reverseString(input)}`;
});

// Task 3: Calculator
class Calculator {
  add(a, b) { return a + b; }
  subtract(a, b) { return a - b; }
  multiply(a, b) { return a * b; }
  divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero.');
    return a / b;
  }
}

const calc = new Calculator();
document.getElementById('calcForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const a = parseFloat(document.getElementById('calcA').value);
  const b = parseFloat(document.getElementById('calcB').value);
  const op = document.getElementById('calcOp').value;
  const resultDiv = document.getElementById('resultCalc');
  try {
    let result;
    switch (op) {
      case 'add': result = calc.add(a, b); break;
      case 'subtract': result = calc.subtract(a, b); break;
      case 'multiply': result = calc.multiply(a, b); break;
      case 'divide': result = calc.divide(a, b); break;
      default: throw new Error('Unknown operation');
    }
    resultDiv.textContent = `Result: ${result}`;
  } catch (err) {
    resultDiv.textContent = err.message;
  }
});

// Task 4: Capitalize
function capitalize(string) {
  if (!string) return '';
  return string[0].toUpperCase() + string.slice(1);
}

document.getElementById('capitalizeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('capitalizeInput').value;
  const resultDiv = document.getElementById('resultCapitalize');
  resultDiv.textContent = `Capitalized: ${capitalize(input)}`;
}); 