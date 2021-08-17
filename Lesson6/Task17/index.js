function uniqueCount(array) {
  const copyArr = [...new Set(array)];
  let output = 0;
  for (let i = 0; i < copyArr.length; i += 1) {
    output += 1;
  }
  return output;
}
console.log(uniqueCount([2, 5, 7, 7, 5, 2, 23, 23]));
