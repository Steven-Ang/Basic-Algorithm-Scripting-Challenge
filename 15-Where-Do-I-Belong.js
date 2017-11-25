function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var results = arr;
  results.push(num);
  results.sort(function(a,b) {
    return a - b;
  });
  return results.indexOf(num);
}

getIndexToIns([40, 60], 50);
