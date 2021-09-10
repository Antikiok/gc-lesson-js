const manageClasses = () => {
  const classOne = document.querySelector('.one');
  const classTwo = document.querySelector('.two');
  const classThree = document.querySelector('.three');
  const classFour = document.querySelector('.four');
  classOne.classList.add('selected');
  classTwo.classList.remove('selected');
  classThree.classList.toggle('three_done');
  if (classFour.classList.contains('some-class')) {
    classFour.classList.add('another-class');
  }
};
manageClasses();
