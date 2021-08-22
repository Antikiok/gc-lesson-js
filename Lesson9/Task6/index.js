const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],

  room3: [{ name: 'Deins' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = (obj) => {
  const unitePeople = Object.values(obj).flat();
  const unitePeopleMassive = unitePeople.map((element) =>
    Object.values(element)
  );
  return unitePeopleMassive.flat();
};

console.log(getPeople(rooms));

// for (let i = 0; i < x.length; i += 1) {
//   a.push(Object.values(x[i]));
// }
// const z = a.flat();
// console.log(z);
