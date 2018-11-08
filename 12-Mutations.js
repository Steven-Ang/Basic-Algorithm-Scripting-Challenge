function mutation(arr) {
  let first = arr[0].toLowerCase();
	let second = arr[1].toLowerCase();

	for (let i = 0; i < second.length; i++) {
		// If there is a character that is not in the first item, then break out and return false
		if (first.indexOf(second[i]) === -1) return false;
	}

	// If everything is fine, then return true
	return true;
}

mutation(["Alien", "line"])
