function all(arr) {
	// Loop through every item in the array

	// If the item evaluates to false, return false
	function myFunction(item) {
		if (item == false) {
			return false;
		}

		else {
			return true;
		}

	}

	arr.forEach(myFunction);


	// If the loop ends, return true
}




