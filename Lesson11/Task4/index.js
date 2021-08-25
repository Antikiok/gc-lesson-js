// Алгоритм
// функция принимает 2 аргумента: 1- строука в которой ищем, 2 - подстрока как предмет поиска
// если строка пустая - поиск продолжается, если подстрока пустая - то выводим null
// Когда найдена подстрока - записываем совпадение в переменнуюю и выводим ее после прохождения по всей строки
const string = 'Today, not tomorrow, good day to sleep';

const countOccurrences = (text, str) => {
  const textArr = text.split(' ');
  let result = 0;
  if (str.length === 0) {
    return null;
  }
  textArr.forEach(element => {
    if (element.includes(str) === true) {
      result += 1;
    }
  });
  return result;
};

console.log(countOccurrences(string, 'da'));
