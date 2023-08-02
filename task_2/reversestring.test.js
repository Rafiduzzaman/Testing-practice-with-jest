const reversestring = require("./reversestring");
const stringLength = require("./reversestring");

test("check if string is reversed", () => {
  // Arrange
  const b = "Disneyland";
  
  // Act
  const result = reversestring(b);
  
  // Assert
  expect(result).toBe("dnalyensiD");
});
