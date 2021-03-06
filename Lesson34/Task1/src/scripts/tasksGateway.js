const baseUrl = 'https://614ffa90a706cd00179b734a.mockapi.io/users';

const mapTask = tasks => tasks.map(({ id, ...rest }) => ({ ...rest, id }));
export const getTasksList = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTask(tasks));

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, updatedTaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
