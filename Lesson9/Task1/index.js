// const getAdults = (userObj) => {
//   const userArray = Object.entries(userObj);
//   console.log(userArray);
//   const filteredUserArray = userArray.filter((user) => user[1] >= 18);
//   const userName = filteredUserArray.map((user) => user[0]);
//   return userName;
// };
const getAdults = (userObj) =>
  Object.entries(userObj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
