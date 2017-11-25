function titleCase(str) {
  var splitArray = str.toLowerCase().split(" ");
  var result = [];

  for (var i = 0; i < splitArray.length; i++) {
    var val = splitArray[i];
    result.push(val.replace(val[0], val[0].toUpperCase()));
  }

  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
