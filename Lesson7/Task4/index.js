const getMessagesForBestStudents = (allStud, retakeStud) =>
  allStud
    .filter((name) => !retakeStud.includes(name))
    .map((name) => `Good job, ${name}`);

// example 1:

// input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

console.log(getMessagesForBestStudents(allStud, retakeStud));
// output:
// ['Good job, a', 'Good job, c']
