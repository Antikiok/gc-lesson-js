const squaredNumbers = () =>
  [...document.querySelectorAll('.number')].map(
    element => (element.dataset.squaredNumber = element.dataset.number ** 2),
  );

squaredNumbers();
