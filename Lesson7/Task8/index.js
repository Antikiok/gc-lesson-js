function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cloneArray = arr.slice();
  return cloneArray;
}
