function bouncer(arr) {
  // Only retrieve the truly items. (false, undefined, 0, '', null, NaN) will be excluded.
  return arr.filter(val => val);
}

bouncer([7, "ate", "", false, 9]);
