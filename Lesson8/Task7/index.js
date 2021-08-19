/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// const pickProps = (obj, props) => {
//   const newObj = {};

//   for (const key in obj) {
//     props.forEach((key) => {
//       if (newObj[key] !== obj[key]) {
//         newObj[key] = obj[key];
//       }
//     });
//   }
//   return newObj;
// };

const getAdults = (obj) => {
  const newObj = {};

  for (const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
