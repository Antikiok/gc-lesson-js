function defer(func, ms, ...args) {
  return function () {
    setTimeout(() => func.apply(this, args, ms));
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'am ${this.name}!`);
  },
};

const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: 'Bob' });
