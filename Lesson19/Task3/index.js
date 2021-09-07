// алгоритм
// 1 User конструктор принимает 2 аргумента name, age
// 2 User имеет 2 метода
// 3 метод sayHi - выводит в консоль текст "Hi, I am John", 'John' - свойство объекта name
// 4 метод requestNewPhoto - выводит в консоль текст "New photo request was sent for John",
// 'John' - свойство объекта name
// 5 setAge - устанавливает новое значение свойству и выведет в консоль "New photo request was sent for John"
// 'John' - свойство объекта name, если новый возраст больше или равен 25
// 6 setAge -  должен вернуть false и прекратить выполнение, если переданное значение меньше 0, иначе просто
// продолжает работу

function User(name, age) {
  this.name = name;
  this.age = age;
  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };

  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  };

  User.prototype.setAge = function (ageOfPerson) {
    this.age = ageOfPerson;
    if (ageOfPerson < 0) {
      return false;
    }
    if (ageOfPerson >= 25) {
      this.requestNewPhoto();
    }
    return ageOfPerson;
  };
}

const user1 = new User('Tom', 23);
console.log(user1);
user1.requestNewPhoto();
console.log(user1.setAge(26));
console.log(user1.setAge(0));
console.log(user1.setAge(-1));
