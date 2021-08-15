function checkSum(arr) {
  let sumOfNumber = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    sumOfNumber += arr[i];
  }
  if (sumOfNumber > 100) {
    return true;
  }
  return false;
}
