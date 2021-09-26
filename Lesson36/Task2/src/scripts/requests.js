export const fetchUserData = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
  return response;
};
export const fetchReposData = async url => {
  const response = await fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
  return response;
};

// export const fetchUserData = userName =>
//   fetch(`https://api.github.com/users/${userName}`).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });

// export const fetchReposData = url =>
//   fetch(url).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });
