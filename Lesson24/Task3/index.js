const oneDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
const twoDate = new Date(Date.UTC(2019, 1, 22, 17, 52, 18));

const getDiff = (startDate, endDate) => {
  const differenceDate = Math.abs(startDate - endDate);

  const days = Math.floor(differenceDate / 86400000);
  const hours = Math.floor((differenceDate - days * 86400000) / 3600000);
  const minutes = Math.floor((differenceDate - (days * 86400000 + hours * 3600000)) / 60000);
  const seconds = Math.floor(
    (differenceDate - (days * 86400000 + hours * 3600000 + minutes * 60000)) / 1000,
  );
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
const result = getDiff(oneDate, twoDate);
console.log(result);
