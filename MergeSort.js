var test = [4, 8, 2, 6, 5, 7, 3, 1];

mergeSort(test);

function mergeSort(arr) {
	// takes in a single, unsorted array as a parameter.
	// split the array into two halves and recursively split it into a single element.
	if (arr.length < 2) return arr;
	var middleIdx = Math.floor(arr.length / 2),
	    firstHalf = arr.slice(0, middleIdx),
	    secondHalf = arr.slice(middleIdx);
	return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arrL, arrR) {
	// takes in two sorted arrays as parameters.
	// merges those sorted arrays into one sorted array.
	// returns one sorted array.
	var merged = [];
	
	while (arrL.length && arrR.length) {
	  var minElem;
		if (arrL[0] < arrR[0]) {
			minElem = arrL.shift();
		} else {
			minElem = arrR.shift();
		}
		merged.push(minElem);
	}

	if(arrL.length){
	  merged = merged.concat(arrL);
	} else {
	  merged = merged.concat(arrR);
	}
	return merged;
}
