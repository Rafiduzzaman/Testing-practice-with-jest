// calculator.test.js

const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Test cases for the 'add' method
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add a positive number and a negative number', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });
  });

  // Test cases for the 'subtract' method
  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should subtract a positive number from a negative number', () => {
      expect(calculator.subtract(-5, 3)).toBe(-8);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });

  // Test cases for the 'divide' method
  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should divide a positive number by a negative number', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  // Test cases for the 'multiply' method
  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should multiply a positive number and a negative number', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});
