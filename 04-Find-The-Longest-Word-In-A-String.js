// Solution 1
function findLongestWord(str) {
  return str
    .split(' ')
    .reduce(function(a, b) {
      return Math.max(a, b.length)
    }, 0);
}

// Solution 2
function findLongestWordLength(str) {
  return str
    .split(" ")
    .sort((a, b) => b.length - a.length )[0].length;
}

// Solution 3 | Different method
function longestWord(str) {
  // Sort it by the longest length
  const sorted = str.split(' ').sort((a, b) => b.length - a.length);
  // If there is multiplie words with the length, put into array
  const results = sorted.filter(word => word.length === sorted[0].length);
  // Return the string if there's only one longest word or else return an array
  return (results.length === 1) ? results[0] : results;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
