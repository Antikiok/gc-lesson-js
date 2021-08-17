const arr = [2, 6, 1, 7, 4];

function sortDesc(numbers) {
  const newArr = numbers.slice();
  newArr.sort((a, b) => b - a);
  return newArr;
}

console.log(sortDesc(arr));
