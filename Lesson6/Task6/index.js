/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  const arraySqrt = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    arraySqrt.push(arr[i] * arr[i]);
  }
  return arraySqrt;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
console.log(squareArray([1, 10, 9, 11]));
