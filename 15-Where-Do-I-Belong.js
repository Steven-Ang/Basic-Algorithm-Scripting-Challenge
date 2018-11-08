// Old solution
// Future me: You could have shorten it.
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var results = arr;
  results.push(num);
  results.sort(function(a,b) {
    return a - b;
  });
  return results.indexOf(num);
}

// New Soluton
function getIndexToIns(arr, num) {
  // Push the item to the array
  arr.push(num)
  return arr
  .sort((a, b) => a - b) // Sort the array in ASC order
  .indexOf(num); // Find the position of the given number and return its index.
}

getIndexToIns([40, 60], 50);
