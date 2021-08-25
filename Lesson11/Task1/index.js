const text = 'abcd efgh';
const splitText = (str, len = 10) => {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    if (typeof str !== 'string') {
      return null;
    }
    const chunk = str.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
};

console.log(splitText(text, 4));

// console.log(typeof text);
