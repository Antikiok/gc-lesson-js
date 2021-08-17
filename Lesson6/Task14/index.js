const getSubArray = (arr, numberOfElements) => {
  const newSubArray = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    newSubArray.push(arr[i]);
  }
  return newSubArray;
};

console.log(getSubArray([2, 5, 8, 7, 9, 12, 7, 5, 123], 5));
