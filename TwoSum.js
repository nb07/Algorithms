function TwoSum(arr, sum){
  var sumArr = [],
      hashtable = [];
  // take array copy into new array.
  arr.forEach(num => {
    for(i = 0; i < arr.length; i++){
      if(num + arr[i] === sum){
        console.log(num + " + " + arr[i] + " = " + sum);
        sumArr.push([num, arr[i]]);
      }    
    }
  });
  return sumArr;
}

function TwoSum2(arr, sum) {
  var sumArr = [],
    hashtable = [];
  for(i = 0; i < arr.length; i++) {
    var currNum = arr[i],
        counterNum = sum - currNum;
    if (hashtable.indexOf(counterNum) !== -1) {
      sumArr.push([ currNum, counterNum ]); 
    }
    hashtable.push(currNum);
  }
  return sumArr;
}

TwoSum2([38, 28, 20, 26, 12, 14, 36, 12], 56);