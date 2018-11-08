// Solution 1
function findLongestWord(str) {
  return str.split(' ')
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

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
