export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => acc + elem * elem, 0);
}

// test data
console.log(sumOfSquares(1, 2, 3, 4));
