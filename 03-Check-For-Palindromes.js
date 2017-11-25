function palindrome(str) {
  return str.replace(/[^0-9a-zA-Z]/gi, '').toLowerCase() == str.replace(/[^0-9a-zA-Z]/gi, '').toLowerCase().split("").reverse().join("");
}

console.log(palindrome("eye"))
console.log(palindrome("dog"))
console.log(palindrome("_eye"));
