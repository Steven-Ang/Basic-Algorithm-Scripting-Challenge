function factorialize(num) {
    var count = 1;
    for (var i = 1; i <= num ; i++) {
        count *= i;
    }
    return count;
}

// Test Cases
console.log("\nTest Case 1: \nInput: 5 \nExpected Output: 120");
console.log("Output: " + factorialize(5) + "\n");

console.log("Test Case 2: \nInput: 20 \nExpected Output: 2432902008176640000");
console.log("Output: " + factorialize(20) + "\n");

console.log("Test Case 2: \nInput: 200 \nExpected Output: Infinity");
console.log("Output: " + factorialize(200));
