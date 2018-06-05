function bubbleSort(Arr) {
	// return array, sorted with bubble sort.
	// loop through array. look at the current num, check number next to that number.
	// if that number is less than current number then put that number at beginning of list.
	for (j = numArr.length; j > 0; j--) {
		for (i = 0; i < j; i++) {
			if (numArr[i] > numArr[i + 1]) {
				var currNum = numArr[i];
				numArr[i] = numArr[i + 1];
				numArr[i + 1] = currNum;
			}
		}
	}
	return Arr;
}

var numArr = [5, 3, 8, 2, 1, 4];

bubbleSort(numArr);
