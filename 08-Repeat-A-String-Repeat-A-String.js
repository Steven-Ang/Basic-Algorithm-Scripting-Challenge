// Solution 1 (Cheated)
function repeatStringNumTimes(str, num) {
  return (num <= 0) ? '' : str.repeat(num);
}

// Solution 2
function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';
  let result = '';
  for (let i = 0; i < num; i++) {
    result = str + result;
  }
  return result;
}

repeatStringNumTimes("abc", 3);
