function reverseArrayInPlace(arr) {
  // take array and manipulate the array without destruction of old array.
  for(i = 0; i < arr.length/2; i++){
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}

testArr = [1, 3, 5, 6];

reverseArrayInPlace(testArr);