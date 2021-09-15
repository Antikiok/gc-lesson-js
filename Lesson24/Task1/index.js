const dayOfWeek = (date, days) => {
  const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const getDate = new Date(date).getDate();
  const setDateWeek = new Date(date).setUTCDate(getDate + days);
  return week[new Date(setDateWeek).getDay()];
};
const result = dayOfWeek(new Date(2021, 5, 5), 10);
console.log(result);
