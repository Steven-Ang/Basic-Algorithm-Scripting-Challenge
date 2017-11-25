function mutation(arr) {
  var word = arr[0].toLowerCase();
  var letters = arr[1].toLowerCase();

  for (var i = 0; i < letters.length; i++) {
    if (word.indexOf(letters[i]) === -1) {
      return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);
