function rot13(str) { // LBH QVQ VG!
  var results = "";

  for (var i = 0; i < str.length; i++) {
    var num = str[i].charCodeAt();
    if (num >= 65 && num <= 77) {
      results += String.fromCharCode(num + 13);
    } else if (num >= 78 && num <= 95) {
      results += String.fromCharCode(num - 13);
    } else {
      results += str[i];
    }
  }

  return results;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
