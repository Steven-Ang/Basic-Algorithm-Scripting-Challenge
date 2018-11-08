// Solution 1
function factorialize(num) {
    var count = 1;
    for (var i = 1; i <= num ; i++) {
        count *= i;
    }
    return count;
}

// Solution 2
function factorialize(num) {
  return (num === 0) ? 1 : num * factorialize(num - 1);
}

factorialize(5);
