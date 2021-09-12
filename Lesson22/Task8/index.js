// put your code here
const input = document.querySelector('.text-input');
const inputChange = event => console.log(event.target.value);

input.addEventListener('change', inputChange);
