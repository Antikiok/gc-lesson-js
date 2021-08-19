/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const concatProps = (obj) => {
  const array = [];
  for (const key in obj) {
    array.push(obj[key]);
  }
  return array;
  // put your code here
};

// examples
concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));
console.log(concatProps({}));

array = { a: 1, b: 2 };
for (let key in array) {
}
