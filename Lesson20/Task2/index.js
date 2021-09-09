/*eslint-disable*/
class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.hasWheels = numberOfWheels;
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

// test data
const ship1 = new Ship('Argo', 45);
console.log(ship1);
ship1.move();
ship1.stop();
