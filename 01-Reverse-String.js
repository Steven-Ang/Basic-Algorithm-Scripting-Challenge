function reverseString(str) {
  return str.split("").reverse().join("");
}

// Test Cases
console.log("\nTest Case 1: \nInput: 'hello' \nExpected Output: 'olleh'");
console.log("Output: " + reverseString("hello") + "\n");

console.log("Test Case 2: \nInput: 'SpikeGreen' \nExpected Output: 'neerGekipS'");
console.log("Output: " + reverseString("SpikeGreen"));
