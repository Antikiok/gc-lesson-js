const isNumber = (num) => {
  for (let i = 0; i < num.length; i += 1) {
    if (!Number.isInteger(num[i])) {
      return null;
    }
  }
  return num;
};

const getRandomNumbers = (length, from, to) => {
  const arr = [];

  for (let i = 0; i < length; i += 1) {
    const number = Number((Math.random() * (to - from) + from).toFixed());
    arr.push(number);
  }
  return isNumber(arr);
};

// Another Solution

// const getRandomNumbers = (length, from, to) => {
//   const arr = [];

//   for (let i = 0; i < length; i += 1) {
//     if (to - from < 1) {
//       return null;
//     }
//     const number = Number((Math.random() * (to - from) + from).toFixed());

//     arr.push(number);
//   }
//   return arr;
// };

console.log(getRandomNumbers(5, 1.4, 3.22));
// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
