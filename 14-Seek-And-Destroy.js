function destroyer(arr) {
  // Get all of the arguments and turn them into an array
  let args = Array.from(arguments);
  // args[0] represents as the given array
  for (let i = 1; i < args.length; i++) {
    // Filter out the array
    // Remove any element that matches the arguments given
    args[0] = args[0].filter(val => val !== args[i])
  }
  // Return the modified array
  return args[0];
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
