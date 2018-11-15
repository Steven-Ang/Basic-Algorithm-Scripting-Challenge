// Solution 1
function factorialize(num) {
    let sum = 1;
    for (var i = 1; i <= num ; i++) {
        sum *= i;
    }
    return sum;
}

// Solution 2
function factorialize(num) {
  return (num === 0) ? 1 : num * factorialize(num - 1);
}

factorialize(5);
