const array = [1, 2, 3, 4, 5];

function arrAverage(arr) {
  const sum = arr.reduce((accum, currentValue) => accum + currentValue);
  const averageSum = sum / arr.length;
  return averageSum;
}
console.log(arrAverage(array));
