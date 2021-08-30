export const createCalculator = () => {
  let memoryNumbers = 0;

  const add = number => {
    memoryNumbers += number;
    return memoryNumbers;
  };
  const decrease = number => {
    memoryNumbers -= number;
    return memoryNumbers;
  };
  const reset = () => {
    memoryNumbers = 0;
    return memoryNumbers;
  };
  const getMemo = () => memoryNumbers;
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
