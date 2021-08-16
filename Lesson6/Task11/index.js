function checker(arr) {
  const copyArray = arr.slice();
  const max = Math.max.apply(null, copyArray);
  const min = Math.min.apply(null, copyArray);

  if (max + min > 1000) {
    return true;
  }
  return false;
}

console.log(checker([11, 100, 200, 30]));
