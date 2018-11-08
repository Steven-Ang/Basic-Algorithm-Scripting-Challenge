function frankenSplice(arr1, arr2, n) {
  let results = arr2.slice();
	for (let item of arr1) {
		results.splice(n, 0, item);
		n++;
	}
	return results;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
