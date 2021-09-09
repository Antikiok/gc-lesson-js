export const setButton = buttonText => {
  if (typeof buttonText !== 'string') {
    return alert('Вы ввели не строку');
  }
  const textForButton = document.querySelector('body');
  textForButton.innerHTML = `<button>${buttonText}</button>`;
  return textForButton;
};

setButton('button text');
