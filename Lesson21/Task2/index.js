export const getTitleElement = () => {
  console.dir(document.querySelector('.title'));
  return document.querySelector('.title');
};

export const getInputElement = () => {
  console.dir(document.querySelector('input[type=text]'));
  return document.querySelector('input[type=text]');
};

getTitleElement();
getInputElement();
