const calc = expression => {
  const [a, operator, b] = expression.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = Number(a) - Number(b);
      break;
    case '*':
      result = Number(a) * Number(b);
      break;
    case '/':
      result = Number(a) / Number(b);
      break;
    default:
      result = 'Не верное значение';
  }
  return `${expression} = ${result}`;
};

console.log(calc('4 + 2'));
console.log(calc('2 - 7'));
console.log(calc('2 * 6'));
console.log(calc('9 / 3'));
