/**
 * @param {number[]} arr
 * @return {number}
 */

function getSum(arr) {
  let sumOfNumber = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    sumOfNumber += arr[i];
  }
  return sumOfNumber;
}

// // examples
// getSum([1, 10, -10, 4]); // ==> 5
// getSum([1]); // ==> 1
// getSum([-8, 8]); // ==> 0
// getSum(10, 12, 14); // ==> null

console.log(getSum(10, 12, 14));
console.log(getSum([1, 10, -10, 4]));
