// Neil Bishop
// 03/10/2018

/**
 * @param {number} n
 * @return {string}
 */
 
 // type into console, countAndSay(n). n = any number.
    
var countAndSay = function(n) {

  var countNums = [1];
  // if n is 1 then prints out '1' and stops function.     
  if (n === 1){
    return "1";
  }
  
  // loop through as many times as n
  for (i = 1; i < n; i++) {
    // loop through and check if next number is equal to that number
    result = countingSaying(countNums);
    countNums = result.split('');
  }
  return result;
};

function countingSaying(arr){
  var count    = 1,
      countArr = [];
  // loop through the length of array.
  for (w = 0; w < arr.length; w++){
    // if next number is equal to current number.
    if (arr[w] == arr[w + 1]){
      // increment count
      count++
    } else {
      // if not equal then push final count and current number into array
      var concatResult = (count.toString() + arr[w].toString());
      countArr.push(concatResult);
      // set count to 1.
      count = 1; 
    }
  }
  // store concatenated arr, then return.
  var newConcat = countArr.join('');
  // newConcat = concatString(countArr);
  return newConcat;
}

var arr = [1, 2, 3, 4];