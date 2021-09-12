const singleBtn = document.querySelector('.single-use-btn');
const searchInput = document.querySelector('.search__input');
const getInputText = () => {
  console.log('clicked');
  singleBtn.removeEventListener('click', getInputText);
};
singleBtn.addEventListener('click', getInputText);
