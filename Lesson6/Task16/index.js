function removeDuplicates(array) {
  const copyArr = [...new Set(array)];
  return copyArr;
}

console.log(removeDuplicates([2, 5, 7, 7, 5, 2, 23, 23]));
