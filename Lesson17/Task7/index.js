// algoritm
// Необходимо создать объект user
// Метод объекта getFullName должен вернуть firstName, lastName из объекта user
// Метод объекта setFullName должен  изменить firstName, lastName в объекте user и вернут их
//

//
//

// input: string,
// output: string

// setFullName
// input: string
// output: object

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const personNames = fullName.split(' ');
    const firstName = personNames[0];
    const lastName = personNames[1];
    this.firstName = firstName;
    this.lastName = lastName;
    return `${this.firstName} ${this.lastName}`;
  },
};

// test data

console.log(user.getFullName());
console.log(user.setFullName.call(user, 'Ivan Drago'));
