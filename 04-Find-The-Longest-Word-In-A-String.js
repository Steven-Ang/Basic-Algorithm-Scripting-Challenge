function findLongestWord(str) {
  return str.split(' ')
    .reduce(function(a, b) {
      return Math.max(a, b.length)
    }, 0);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
