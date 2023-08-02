function stringLength(string) {
    // Get the length of the string
    const length = string.length;
    
    // Check if the length is within the required range
    if (length < 1 || length > 10) {
      throw new Error("String must be between 1 and 10 characters long.");
    }
    
    return length;
  }
  
  module.exports = stringLength;
  