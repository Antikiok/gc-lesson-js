const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const arrCopy = arr.slice();
  const sumOfEvenNumber = [];

  for (let i = 0; i < arrCopy.length; i += 1) {
    if (arrCopy[i] % 2 === 0) {
      sumOfEvenNumber.push(arrCopy[i] + delta);
    } else {
      sumOfEvenNumber.push(arrCopy[i]);
    }
  }
  return sumOfEvenNumber;
};

increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===>
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([7, 11, 1], 10));
console.log(increaseEvenEl([], 120));
