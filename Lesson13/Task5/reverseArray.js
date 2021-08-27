/* eslint-disable for-direction */
export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArray = arr.slice();
  const revArr = [];
  for (let i = copyArray.length - 1; i >= 0; i -= 1) {
    revArr.push(copyArray[i]);
  }
  return revArr;
}

console.log(reverseArray([11, 22, 33, 44]));
