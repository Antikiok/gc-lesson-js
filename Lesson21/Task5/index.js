const setTitle = text => {
  if (typeof text !== 'string') {
    return 'Вы ввели не строку';
  }
  const title = document.querySelector('.title');
  title.textContent = text;
  return title;
};

setTitle('new title set');
setTitle(null);
