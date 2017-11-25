function destroyer(arr) {
  var args = Array.from(arguments);

  for (var i = 1; i < args.length; i++) {
    args[0] = args[0].filter(function(val) {
      return val !== args[i];
    });
  }

  return args[0];
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
