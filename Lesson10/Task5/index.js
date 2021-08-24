const num = [1.7573, 1.3234, 2.7889];

const getTotalPrice = (numbers) => {
  const sumNumbers = numbers.reduce((sum, i) => sum + i, 0);
  const floorNumber = Math.floor(sumNumbers * 100) / 100;
  return `$${floorNumber}`;
};
console.log(getTotalPrice(num));
