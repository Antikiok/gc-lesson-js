const finishList = () => {
  const getLi = document.querySelector('ul');
  const getLiClassSpecial = document.querySelector('.special');

  //   const getUl = document.querySelector('ul');

  const createLi1 = document.createElement('li');
  const createLi4 = document.createElement('li');
  const createLi6 = document.createElement('li');
  const createLi8 = document.createElement('li');
  createLi1.textContent = '1';
  createLi4.textContent = '4';
  createLi6.textContent = '6';
  createLi8.textContent = '8';
  getLi.prepend(createLi1);
  getLiClassSpecial.before(createLi4);
  getLiClassSpecial.after(createLi6);
  getLi.append(createLi8);
};
