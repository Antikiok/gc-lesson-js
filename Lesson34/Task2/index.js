const baseUrl = 'https://614ffa90a706cd00179b734a.mockapi.io/users';

export function getUsersList() {
  return fetch('https://614ffa90a706cd00179b734a.mockapi.io/users').then(response =>
    response.json(),
  );
}

export function getUserById(userId) {
  return fetch(`${'https://614ffa90a706cd00179b734a.mockapi.io/users'}/${userId}`).then(response =>
    response.json(),
  );
}

export function createUser(userData) {
  return fetch('https://614ffa90a706cd00179b734a.mockapi.io/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  return fetch(`${'https://614ffa90a706cd00179b734a.mockapi.io/users'}/${userId}`, {
    method: 'DELETE',
  });
}

export function updateUser(userId, userData) {
  return fetch(`${'https://614ffa90a706cd00179b734a.mockapi.io/users'}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

// examples
getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('2').then(() => {
  console.log('User updated');
});
