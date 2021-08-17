function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const sumArr = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sumArr;
}

console.log(sum([1, 2, 3, 4]));
