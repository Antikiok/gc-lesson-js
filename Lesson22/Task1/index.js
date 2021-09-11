const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const clearHandleds = document.querySelector('.clear-btn');
const removeHandleds = document.querySelector('.remove-handlers-btn');
const attachHandleds = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const attachHandledsFunc = () => {
  const attachHandledsTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
  };
  console.log('Работает');
  const attachGreenDiv = attachHandledsTarget('DIV', 'green');
  const attachGreenP = attachHandledsTarget('P', 'green');
  const attachGreenSpan = attachHandledsTarget('SPAN', 'green');

  const attachGreyDiv = attachHandledsTarget('DIV', 'grey');
  const attachGreyP = attachHandledsTarget('P', 'grey');
  const attachGreySpan = attachHandledsTarget('SPAN', 'grey');

  divElem.addEventListener('click', attachGreyDiv, true);
  pElem.addEventListener('click', attachGreyP, true);
  spanElem.addEventListener('click', attachGreySpan, true);

  divElem.addEventListener('click', attachGreenDiv);
  pElem.addEventListener('click', attachGreenP);
  spanElem.addEventListener('click', attachGreenSpan);
};

const clearTarget = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const buttonClear = clearTarget.bind(null);
const buttonAttach = attachHandledsFunc.bind(null);

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

clearHandleds.addEventListener('click', buttonClear);
attachHandleds.addEventListener('click', buttonAttach);
removeHandleds.removeEventListener('click', buttonAttach);
