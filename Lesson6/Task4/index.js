function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];

  // put your code here
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const a = numbers.slice();
  a.push(a.shift());
  return a;
}

// examples
// swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
// swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
// console.log(swap([1, 10, 9, 11]));
console.log(swapManual([1, 10, 9, 11]));
