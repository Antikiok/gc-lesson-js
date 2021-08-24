const num = [-777, 3, -1, 45, -20];

const getMaxAbsoluteNumber = (number) => {
  if (!Array.isArray(number) || number.length === 0) {
    return null;
  }
  const modulNumber = number.map((el) => Math.abs(el));
  return Math.max(...modulNumber);
};
console.log(getMaxAbsoluteNumber(num));
