// Solution 1
// Future me: What is this...? This is a pretty bad solution lol.
function titleCase(str) {
  var splitArray = str.toLowerCase().split(" ");
  var result = [];

  for (var i = 0; i < splitArray.length; i++) {
    var val = splitArray[i];
    result.push(val.replace(val[0], val[0].toUpperCase()));
  }

  return result.join(" ");
}

// Solution 2
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

// Solution 3
function capitalize(str) {
  // Init the value as the first capitalized character of the given string
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    // If there's a space before the character, capitalize the current character
    (str[i - 1] === ' ') ? result += str[i].toUpperCase() : result += str[i];
  }
  return result;
}

console.log(titleCase("I'm a little tea pot"));
