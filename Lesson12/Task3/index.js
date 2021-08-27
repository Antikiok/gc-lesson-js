// Алгоритм
// 1 Функция принимает массив типа [' 1.9 ', '16.4', 17, ' 1 dollar ']; и проходит по каждому элементу
// 2 убирает пробелы вначале и в конце и убирает элементы содержащие буквы
// 3 возращает массив вида ['$1.90', '$16.40', '17.00'], где каждый элемент - строка,
// содержит $ перед цифрой и 2 знака после запятой
// 4. Исходный массив не меняем!
const Transactions = [' 1.9 ', '16.4', 17, ' 1 dollar '];
const cleanTransactionsList = listTransactions => {
  const filteredArray = listTransactions.filter(el => !isNaN(el));
  return filteredArray.map(el => `$${Number(el).toFixed(2)}`);
};
// cleanTransactonsList(Transactons);
console.log(cleanTransactionsList(Transactions));
