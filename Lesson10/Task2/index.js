const num = ['17.17 text', '18.2', '17.5', 7, 15.4];

const getParsedIntegers = (number) =>
  number.map((el) => Number.parseInt(el, 10));

const getParsedIntegersV2 = (number) => number.map((el) => parseInt(el, 10));
const getParsedFloats = (number) =>
  number.map((el) => Number.parseFloat(el, 10));
const getParsedFloatsV2 = (number) => number.map((el) => parseFloat(el, 10));

const compare = (number) =>
  getParsedIntegers(number) === getParsedIntegersV2(number);
const compareV2 = (number) =>
  getParsedFloats(number) === getParsedFloatsV2(number);

console.log(getParsedIntegers(num));
console.log(getParsedIntegersV2(num));
console.log(getParsedFloats(num));
console.log(getParsedFloatsV2(num));
console.log(compare(num));
console.log(compareV2(num));
