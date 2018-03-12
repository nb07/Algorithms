function meanMedianMode(arr) {
  // take array and find mean, median, and mode.
  
  arr.sort(function(a, b){return a - b});
  
  mathObj = {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
  return mathObj;
}

function getMean(arr){
  var total = 0;
  // Mean
  // find sum of all numbers in arr and divide by the amount of numbers
  for(i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total / arr.length;
}

function getMedian(arr){
  var half;
  if (arr.length % 2){
    half = Math.floor(arr.length/2);
    return arr[half];
  } else {
    half = arr.length/2;
    return (arr[half] + arr[half+1])/2
  }
}

function getMode(arr){
  // Mode
  // find the most repeated number.
  var modeObj = {};
  arr.forEach(num => {
    if(!modeObj[num]){
      modeObj[num] = 0;
    }
    modeObj[num]++
  });
  var maxFreq = 0,
      modes    = [];
  for(var num in modeObj){
    if (modeObj[num] > maxFreq) {
      modes = [num];
      maxFreq = modeObj[num];
    }
    else if(modeObj[num] === maxFreq){
      modes.push(num);
    }
  }
  if (modes.length === Object.keys(modeObj).length) {
    modes = [];
  }
  return modes;
}

var testArr = [1, 2, 3, 4, 5, 4, 6, 1];

meanMedianMode(testArr);