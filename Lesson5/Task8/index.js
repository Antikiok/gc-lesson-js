function findDivCount(a, b, n) {
  let res = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      res += 1;
    }
  }
  return res;
}

console.log(findDivCount(1, 6, 2));
