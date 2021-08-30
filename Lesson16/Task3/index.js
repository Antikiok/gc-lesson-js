const createArrayOfFunctions = (length = 0) => {
  const arr = [];
  if (isNaN(length)) {
    return null;
  }
  for (let i = 0; i < length; i += 1) {
    arr[i] = function () {
      return i;
    };
    if (isNaN(length)) {
      return null;
    }
  }
  if (isNaN(length)) {
    return null;
  }
  return arr;
};
export { createArrayOfFunctions };

// test data

console.log(createArrayOfFunctions('some text'));
console.log(createArrayOfFunctions(5));
console.log(createArrayOfFunctions());
