const oneDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
const twoDate = new Date(Date.UTC(2019, 1, 22, 17, 52, 18));
const SEC = 1000;
const MINUTE = 60 * SEC;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const getDiff = (startDate, endDate) => {
  const differenceDate = Math.abs(startDate - endDate);

  const days = Math.floor(differenceDate / DAY);
  const hours = Math.floor((differenceDate % DAY) / HOUR);
  const minutes = Math.floor((differenceDate % HOUR) / MINUTE);
  const seconds = Math.floor((differenceDate % MINUTE) / SEC);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
const result = getDiff(oneDate, twoDate);
console.log(result);
