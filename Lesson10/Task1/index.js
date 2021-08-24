const num = ['17.17 text', '18.el', '17.5', 7, 15.4];

const getFiniteNumbers = (number) => number.filter((el) => Number.isFinite(el));

const getFiniteNumbersV2 = (number) => number.filter((el) => isFinite(el));
const getNaN = (number) => number.filter((el) => Number.isNaN(el));
const getNaNV2 = (number) => number.filter((el) => isNaN(el));
const getIntegers = (number) => number.filter((el) => Number.isInteger(el, 10));

const compare = (number) =>
  getFiniteNumbers(number) === getFiniteNumbersV2(number);
const compareV2 = (number) => getNaN(number) === getNaNV2(number);

console.log(getFiniteNumbers(num));
console.log(getFiniteNumbersV2(num));
console.log(getNaN(num));
console.log(getNaNV2(num));
console.log(getIntegers(num));
console.log(compare(num));
console.log(compareV2(num));
