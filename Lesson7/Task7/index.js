/* eslint-disable array-callback-return */
const array = [2, 5, 6, 8, 11, 9, 4];

function increaseEvenEl(arr, delta) {
  const newArr = [];

  if (!Array.isArray(arr)) {
    return null;
  }
  arr.map((num) => {
    if (num % 2 === 0) {
      newArr.push(num + delta);
    } else {
      newArr.push(num);
    }
  });
  return newArr;
}

console.log(increaseEvenEl(array, 20));
