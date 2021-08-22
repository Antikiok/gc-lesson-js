const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// function getKeys(obj) {
//   const arr = Object.keys(obj);
//   for (let i = 0; i <= arr.length; i += 1) {
//     console.log(arr[i]);
//   }
// }

function getKeys(obj) {
  Object.keys(obj).forEach((keys) => {
    console.log(keys);
  });
}

// getKeys(object);

console.log(getKeys(object));
