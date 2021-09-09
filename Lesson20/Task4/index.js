// алгоритм
// 1 set in class Order (price, city, type, ). ID - randomize
// 2 checkPrice() - checked order sum and return - true if > 1000, else - false
// 3 confirmOrder() - set Order 'confirmed = true' if order not approve before
// date set Now
// 4 isValidType() - type = true if set Buy or Sell. Another - false

class Order {
  constructor(price, city, type) {
    this.id = `${(Math.random() * 1000).toFixed()}`;
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = false;
    this.dateCreated = new Date();
  }

  checkPrice() {
    return this.price > 1000 || false;
  }

  confirmOrder() {
    if (this.isConfirmed !== true) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const order1 = new Order(1200, 'Kharkov', 'Buy', 40);
order1.confirmOrder();

console.log(order1);

const order2 = new Order(200, 'Odessa', 'Sell');
order2.confirmOrder();
console.log(order2);

const order3 = new Order(230, 'Kiev', 'Buy');
console.log(order3);
