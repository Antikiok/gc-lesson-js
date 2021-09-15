const tasks = [
  { text: 'Buy milk', done: false, id: (Math.random() * 100).toFixed() },

  {
    text: 'Pick up Tom from airport',
    done: false,
    id: (Math.random() * 100).toFixed(),
  },
  { text: 'Visit party', done: false, id: (Math.random() * 100).toFixed() },
  { text: 'Visit doctor', done: true, id: (Math.random() * 100).toFixed() },
  { text: 'Buy meat', done: true, id: (Math.random() * 100).toFixed() },
];
const listElem = document.querySelector('.list');
const renderTasks = taskList => {
  const listItemsElems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.dataset.id = id;
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.dataset.id = id;
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);
      return listItemElem;
    });
  listElem.append(...listItemsElems);
};

renderTasks(tasks);

const btn = document.querySelector('.btn');

const taskInput = document.querySelector('.task-input');

const addTask = () => {
  if (taskInput.value !== '') {
    tasks.push({
      text: taskInput.value,
      done: false,
      id: (Math.random() * 100).toFixed(),
    });
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
  taskInput.value = '';
};

const checked = event => {
  const checkboxId = event.target.dataset.id;
  const filterId = tasks.find(el => el.id === checkboxId);
  if (event.target.checked) {
    filterId.done = true;
  } else {
    filterId.done = false;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
  taskInput.value = '';
};
listElem.addEventListener('click', checked);

const addBtn = btn.addEventListener('click', addTask);
console.log(tasks);
