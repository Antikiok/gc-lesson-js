const button = document.querySelectorAll('.btn');

const handleCLick = event => {
  console.log(`${event.target.textContent}`);
};

[...button].forEach(element => {
  element.addEventListener('click', handleCLick);
});
