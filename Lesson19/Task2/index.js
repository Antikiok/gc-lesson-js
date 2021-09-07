/*eslint-disable*/
const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  liftAnchorUp() {
    console.log(`${this.name} lifting anchor up`);
  },
  liftAnchorDown() {
    console.log(`${this.name} lifting anchor down`);
  },
  startMachine() {
    this.liftAnchorUp();
    this.move();
  },
  stopMachine() {
    this.stop();
    this.liftAnchorDown();
  },
};

function getOwnProps(arg) {
  const arr = [];
  for (let prop in arg) {
    if (arg.hasOwnProperty(prop) && typeof arg[prop] !== 'function') {
      arr.push(prop);
    }
  }
  return arr;
}

// test data
console.log(getOwnProps(ship));
