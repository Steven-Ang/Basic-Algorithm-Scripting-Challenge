// Solution 1
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Solution 2
function reverseString(str) {
  let result = '';
  for (let char of str) {
    result = char + result;
  }
  return result;
}

reverseString("hello");
