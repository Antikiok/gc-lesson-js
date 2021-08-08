/* eslint-disable prefer-const */
const start = 4;
const end = 12;
let result = 0;

// eslint-disable-next-line no-shadow
for (let start = 4; start <= end; start += 1) {
  if (start % 5 === 0) {
    console.log(start);
  } else if (start % 2 === 0 && start % 4 !== 0) {
    result += start;
  } else if (start % 3 === 0) {
    result -= start;
  } else if (start % 4 === 0) {
    result *= start;
  }
}
