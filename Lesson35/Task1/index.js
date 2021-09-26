try {
  const jsonString = { name: 'Tom' };
  const userData = JSON.parse(jsonString);
  console.log(userData);
} catch (error) {
  console.error(err.name);
}

console.log('I am alive');
