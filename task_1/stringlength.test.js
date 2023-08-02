const stringLength = require("./stringlength");

test("check string length range", () => {
  // Arrange
  const b = "Disneyland";
  
  // Act
  const result = stringLength(b);
  
  // Assert
  expect(result).toBe(10);
});

test("check empty string", () => {
  // Arrange
  const b = "";
  
  // Assert
  expect(() => stringLength(b)).toThrowError("String must be between 1 and 10 characters long.");
});

test("check string with more than 10 characters", () => {
  // Arrange
  const b = "ThisStringIsTooLong";
  
  // Assert
  expect(() => stringLength(b)).toThrowError("String must be between 1 and 10 characters long.");
});