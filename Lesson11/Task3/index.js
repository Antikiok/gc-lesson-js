const string = 'abcd efgh';

const splitString = (str, len = 10) => {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    if (typeof str !== 'string') {
      return null;
    }

    let chunk = str.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }

    chunk = chunk.padEnd(len, '.');
    strArr.push(chunk);
    startPosition += len;
  }

  return strArr;
};

// const x = 'abcd efgh';
// const y = x.split('...', 2);
// console.log(y);

// function splitString(text, len = 10) {
//   if (typeof str !== 'string') {
//     return null;
//   }

//   const strArr = [];
//   let startPosition = 0;

//   while (true) {
//     let chunk = text.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     }

//     chunk = chunk.padEnd(len, '.');
//     strArr.push(chunk);
//     startPosition += len;
//   }

//   return strArr;
// }

// function splitString(text, len = 10) {
//   if (typeof text !== typeof 'j') {
//     return null;
//   };

//   const strArr = [];
//   let startPosition = 0;

//   while (true) {
//     let chunk = text.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     };

//     chunk = chunk.padEnd(len, '.');
//     strArr.push(chunk);
//     startPosition += len;
//   };

//   return strArr;
// };

// const splitString = (str, len = 10) => {
//   const strArr = [];
//   let startPosition = 0;
//   const dots = '...';
//   while (true) {
//     if (typeof str !== 'string') {
//       return null;
//     }
//     const chunk = str.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk.slice());
//     startPosition += len;
//   }
//   return strArr.concat(dots);
// };
console.log(splitString(string, 4));
