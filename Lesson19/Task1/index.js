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

Object.setPrototypeOf(ship, vehicle);

// test data
ship.move();
ship.stop();
ship.startMachine();
ship.stopMachine();
