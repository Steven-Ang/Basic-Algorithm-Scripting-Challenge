// Elegant
function largestOfFour(arr) {
  return arr.map(function(item) {
    return item.reduce(function(prev, current){
      return (current > prev) ? current : prev;
    });
  });
}

// Not so elegant
function largestOfFour(arr) {
  return arr.map(item => {
    return item.reduce( (prev, current) => (current > prev) ? current : prev );
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
