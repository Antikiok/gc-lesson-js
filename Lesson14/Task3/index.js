// задаем значение памяти 0
// add принимает число и сумировать что в памяти
// decrease принимать число и отнимать от того, что в памяти
// reset сбрасывает память - устанавливает 0
// getMemo вернуть число в память

let memoryNumbers = 0;

export const add = number => {
  memoryNumbers += number;
  return memoryNumbers;
};
export const decrease = number => {
  memoryNumbers -= number;
  return memoryNumbers;
};
export const reset = () => {
  memoryNumbers = 0;
  return memoryNumbers;
};
export const getMemo = () => memoryNumbers;

// console.log(memoryNumbers);
// add(8);
// console.log(`add 8 = ${memoryNumbers}`);
// decrease(5);
// console.log(`decrease 5 = ${memoryNumbers}`);
// reset();
// console.log(`reset to 0 = ${memoryNumbers}`);
