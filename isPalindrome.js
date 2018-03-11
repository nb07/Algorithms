function isPalindrome(string){

  var ogSA          = string.toLowerCase().split(''),
      compareString = ogSA.filter(isSpace).filter(isApost).join(''),
      revOgSA       = ogSA.filter(isSpace).filter(isApost).reverse().join('');

  if(revOgSA === compareString){
    return "string is palindrome, the word is: " + string;
  } else {
    return "sorry string is not a palindrome :(";
  }
}

isPalindrome("Madam I'm Adam");
// isPalindrome('Race Car');

function isSpace(letter){
  if(letter !== ' '){
    return letter;
  }
}

function isApost(letter){
  if(letter !== "'"){
    return letter;
  }
}