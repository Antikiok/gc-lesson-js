export const createButton = buttonText => {
  if (typeof buttonText !== 'string') {
    return alert('Вы ввели не строку');
  }

  const button = document.createElement('button');
  button.innerHTML = buttonText;
  document.body.append(button);
  return button;
};

createButton('some button');
