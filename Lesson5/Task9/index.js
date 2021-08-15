function sum(from, to) {
  let res = 0;
  for (let i = from; i <= to; i += 1) {
    res += i;
  }
  return res;
}

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  }
  return false;
}
