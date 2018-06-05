function binarySearch(numArr, key) {
  // divide array in half.
  var middleIdx = Math.floor(numArr.length / 2),
  // look at number in the middle of array.
      middleEl  = numArr[middleIdx];
  // if middleEl is === to key return middleEl.
  if (middleEl === key) {
    return true;
  } else if (middleEl < key && numArr.length > 1) {
      return binarySearch(numArr.splice(middleIdx, numArr.length), key);
  } else if (middleEl > key && numArr.length > 1) {
      return binarySearch(numArr.splice(0, middleIdx), key)
  } else 
      return false;
}


binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
