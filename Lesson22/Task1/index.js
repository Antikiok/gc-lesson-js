const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsListElem = document.querySelector('.events-list');
const clearHandleds = document.querySelector('.clear-btn');
const removeHandleds = document.querySelector('.remove-handlers-btn');
const attachHandleds = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const removeHandledsFunc = () => {
  const removeHandledsTarget = (text, color) => {
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
  };
  const removeGreenDiv = removeHandledsTarget('DIV', 'green');
  const removeGreenP = removeHandledsTarget('P', 'green');
  const removeGreenSpan = removeHandledsTarget('SPAN', 'green');

  const removeGreyDiv = removeHandledsTarget('DIV', 'grey');
  const removeGreyP = removeHandledsTarget('P', 'grey');
  const removeGreySpan = removeHandledsTarget('SPAN', 'grey');
  divElem.removeEventListener('click', removeGreenDiv, true);
  pElem.removeEventListener('click', removeGreenP, true);
  spanElem.removeEventListener('click', removeGreenSpan, true);

  divElem.removeEventListener('click', removeGreyDiv);
  pElem.removeEventListener('click', removeGreyP);
  spanElem.removeEventListener('click', removeGreySpan);
};

const clearTarget = () => {
  eventsListElem.innerHTML = '';
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const buttonClear = clearTarget.bind(null);

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

const attachHandledsFunc = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);

  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);
};

clearHandleds.addEventListener('click', buttonClear);
attachHandleds.addEventListener('click', attachHandledsFunc);
removeHandleds.removeEventListener('click', removeHandledsFunc);

// ==========================================================================================
