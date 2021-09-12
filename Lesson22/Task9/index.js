const checkbox = document.querySelector('.task-status');
const checkboxChange = event => console.log(event.target.checked);

checkbox.addEventListener('change', checkboxChange);
