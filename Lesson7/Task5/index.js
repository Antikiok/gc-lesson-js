const number = [2, 3, 4];

const squareArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.map((num) => num * num);
};
console.log(squareArray(number));
