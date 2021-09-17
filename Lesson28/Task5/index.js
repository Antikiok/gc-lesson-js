const shmoment = date => {
  const copyDate = new Date(date);

  const calculator = {
    add(text, number) {
      if (text === 'years') copyDate.setFullYear(copyDate.getFullYear() + number);
      if (text === 'months') copyDate.setMonth(copyDate.getMonth() + number);
      if (text === 'days') copyDate.setDate(copyDate.getDate() + number);
      if (text === 'hours') copyDate.setHours(copyDate.getHours() + number);
      if (text === 'minutes') copyDate.setMinutes(copyDate.getMinutes() + number);
      if (text === 'seconds') copyDate.setSeconds(copyDate.getSeconds() + number);
      if (text === 'milliseconds') copyDate.setMilliseconds(copyDate.getMilliseconds() + number);
      return this;
    },

    subtract(text, number) {
      if (text === 'years') copyDate.setFullYear(copyDate.getFullYear() - number);
      if (text === 'months') copyDate.setMonth(copyDate.getMonth() - number);
      if (text === 'days') copyDate.setDate(copyDate.getDate() - number);
      if (text === 'hours') copyDate.setHours(copyDate.getHours() - number);
      if (text === 'minutes') copyDate.setMinutes(copyDate.getMinutes() - number);
      if (text === 'seconds') copyDate.setSeconds(copyDate.getSeconds() - number);
      if (text === 'milliseconds') copyDate.setMilliseconds(copyDate.getMilliseconds() - number);
      return this;
    },

    result() {
      return copyDate;
    },
  };
  return calculator;
};

const testDate = new Date(2020, 0, 7, 17, 17, 17);
console.log(testDate);

const result = shmoment(testDate).add('minutes', 2).add('days', 8).subtract('years', 1).result(); // ... Jan 15 2019 17:19:17 ...
console.log(new Date(result));
