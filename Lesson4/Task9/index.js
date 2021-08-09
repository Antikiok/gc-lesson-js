/* eslint-disable no-unneeded-ternary */
/* eslint-disable prefer-const */
const x = 1000;
let sum = 0;

for (let i = 1; i <= 1000; i += 1) {
  sum += i;
}
let div = Math.trunc(sum / 1234);
let mods = sum % 1234;

console.log(div > mods ? true : false);
