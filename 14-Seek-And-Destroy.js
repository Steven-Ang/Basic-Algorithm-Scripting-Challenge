function destroyer(arr) {
  // Get all of the arguments and turn them into an array
  const args = Array.from(arguments);
  // Store the array into a variable
  let results = args[0];
  for (let i = 1; i < args.length; i++) {
    // Filter out the array
    // Remove any element that matches the arguments given
    results = results.filter(val => val != args[i]);
  }
  // Return the modified array
  return results;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
