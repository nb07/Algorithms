// take the input of a string and a key. whatever the key is, shift the letters according to that key.
var caesarCipher = function(string, key) {
  key = key % 26;
	var newStr     = '',
	    codedArr   = [];
	    alphabet   = 'abcdefghijklmnopqrstuvwxyz'.split(''),
		  lowCaseStr = string.toLowerCase();
	// loop through string and find each index in alphabet arr.
	for (i = 0; i < lowCaseStr.length; i++) {
		var currentLetter = lowCaseStr[i];
		// if current letter is space, then add it back to string and continue to next iteration.
		if (currentLetter === ' ') {
      newStr += currentLetter;
      continue;
		}
		var currentIndex = alphabet.indexOf(currentLetter);
    var codedIndex = currentIndex + key;
    if (codedIndex > 25){
      codedIndex -= 26; 
    }
    if (codedIndex < 0){
      codedIndex += 26;
    }
    if (string[i] === string[i].toUpperCase()){
      newStr += alphabet[codedIndex].toUpperCase();
    } else {
      newStr += alphabet[codedIndex];
    }
	}
	return newStr;
};




