class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(ageOfPerson) {
    this.age = ageOfPerson;
    if (ageOfPerson < 0) {
      return false;
    }
    if (ageOfPerson >= 25) {
      this.requestNewPhoto();
    }
    return ageOfPerson;
  }

  static createEmpty() {
    return new this('', null);
  }
}

const user1 = new User('Tom', 23);
console.log(user1);
user1.requestNewPhoto();
console.log(user1.setAge(26));
console.log(user1.setAge(0));
console.log(user1.setAge(-1));
