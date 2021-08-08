const x = 1000;
// eslint-disable-next-line prefer-const
let sum = 0;
for (let i = 0; i <= x; i += 1) {
  if (i % 2 === 1) {
    sum += i;
    console.log('Found');
  }
}
