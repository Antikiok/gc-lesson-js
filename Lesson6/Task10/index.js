function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrayClone = arr.slice();
  return arrayClone;
}
