const arr = ['Tom', 'Oliviya', 'Medium', 'Nastya', 'Ulya', 'Alchemist'];

function filterNames(array, text) {
  const copyArr = [];
  array.forEach((element) => {
    if (element.includes(text) === true) {
      copyArr.push(element);
    }
  });
  return copyArr.filter((word) => word.length > 5);
}
console.log(filterNames(arr, 'ya'));
