export const getItemList = () => {
  console.dir(document.querySelectorAll('.technology'));
  return document.querySelectorAll('.technology');
};

export const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(elementsArray);
  return elementsArray;
};
