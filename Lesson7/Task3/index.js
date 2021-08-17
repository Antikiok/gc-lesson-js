const arr = [4, [5, 3], 1, [2, 9, 7]];
function flatArray(array) {
  return array
    .flat()
    .sort((a, b) => a - b)
    .slice();
}

console.log(flatArray(arr));

// const x = arr.flat();

// console.log(x);
