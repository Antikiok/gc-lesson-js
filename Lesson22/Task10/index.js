const paginationPage = document.querySelectorAll('.pagination__page');

const handleCLick = event => {
  console.log(event.target.dataset.pageNumber);
};
[...paginationPage].forEach(element => element.addEventListener('click', handleCLick));
