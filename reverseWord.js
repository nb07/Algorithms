function reverseWord(string) {

	var wordsArr = string.split(' '),
		newStr = '';

	wordsArr.forEach(word => {
		var letterArr = word.split(''),
			reversedWord = '';

		for (i = letterArr.length - 1; i >= 0; i--) {
			reversedWord += letterArr[i];
		}

		newStr += reversedWord + ' ';
	});

	return newStr;
}

reverseWord('Even when i say something completely random it still reverses the words');
