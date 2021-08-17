/* eslint-disable array-callback-return */
const arr = [1, 2, 3, 4, 5, 6];

function getSpecialNumbers(numbers) {
  const newArr = [];
  numbers.map((num) => {
    if (num % 3 === 0) {
      newArr.push(num);
    }
  });
  return newArr;
}

// function getSpecialNumbers(numbers) {
//   return numbers.filter((num) => num % 3 === 0);
// }

console.log(getSpecialNumbers(arr));
