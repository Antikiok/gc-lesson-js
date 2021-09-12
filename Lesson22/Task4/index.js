const checkbox = document.querySelector('.task-status');
const checkboxChange = () => console.log(checkbox.checked);

checkbox.addEventListener('change', checkboxChange);
