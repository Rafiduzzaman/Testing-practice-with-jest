const { capitalize } = require('./capitalize'); // Assuming you will have a separate file for the capitalize function

test('capitalize function should capitalize the first character of the string', () => {
  const input = 'hello world';
  const expectedOutput = 'Hello world';
  const result = capitalize(input);
  expect(result).toBe(expectedOutput);
});