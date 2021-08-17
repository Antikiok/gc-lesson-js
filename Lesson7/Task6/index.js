const array = [1, 2, 3, 4, 5];
const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrayCopy = arr.slice();
  return arrayCopy.reverse();
};

console.log(reverseArray(array));
