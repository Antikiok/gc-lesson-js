function getSum(start, end) {
  let res = 0;
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      res += i;
    }
  }
  return res;
}

console.log(getSum(1, 6));
