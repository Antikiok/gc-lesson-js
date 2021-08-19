/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// const pickProps = (obj, props) => {
//   // put your code here
//   let x = {};

//   for (const key in obj) {
//     // console.log(key, obj[key]);
//     x = { key, obj['key'] };

//     // if (key[obj] === props) {
//     // x.push(obj[key]);
//     // }
//   }
//   return x;
// };

const pickProps = (obj, props) => {
  const newObj = {};

  for (const key in obj) {
    props.forEach((key) => {
      if (newObj[key] !== obj[key]) {
        newObj[key] = obj[key];
      }
    });
  }
  return newObj;
};

// examples
// pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
// pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }

console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));

console.log(pickProps({ a: 1, b: 2, c: 3 }, []));
