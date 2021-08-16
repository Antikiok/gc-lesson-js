function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort((a, b) => a - b);
}
function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort((a, b) => b - a);
}

console.log(sortAsc([5, 2, 1, -10, 8]));
console.log(sortDesc([5, 2, 1, -10, 8]));
