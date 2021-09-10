export const finishForm = () => {
  const getLoginForm = document.querySelector('.login-form');
  const getPassword = document.querySelector('input');
  const createInput = document.createElement('input');
  const attributes = {
    type: 'text',
    name: 'login',
  };
  Object.entries(attributes).map(([key, value]) => createInput.setAttribute(key, value));
  console.log(getPassword);
  getPassword.setAttribute('type', 'password');
  getLoginForm.prepend(createInput);
};

finishForm();
