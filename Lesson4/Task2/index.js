const n = 6;
let result = 1;
let m = 2;

for (; m <= n; m += 1) {
  if (m % 2 === 1) {
    result *= m;
  }
}

console.log(result);
