// Алгоритм
// 1 Необходимо перебрать массив и найти минимальное по модулю
// 2 Минимальное число воздвигнуть в квадрат
// 3 Проверка , не массив или пустой массив - null

const arr = [-777, 3, -2, 6, 45, -20];
// const arr1 = [];
// const arr2 = 'some string'

export const getMinSquaredNumber = arrayNumbers => {
  if (!Array.isArray(arrayNumbers) || arrayNumbers.length === 0) {
    return null;
  }
  const moduleMinNumber = Math.min(...arrayNumbers.map(el => Math.abs(el)));
  return moduleMinNumber * moduleMinNumber;
};

console.log(getMinSquaredNumber(arr));

// const minNumber = array => {
//   let min = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min;
// };
// console.log(minNumber(arr));
