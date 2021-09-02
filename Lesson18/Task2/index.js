export const wallet = {
  transactions: [1, 4, 6, 8, 22, 34],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};

// test data
console.log(wallet.getMax());
console.log(wallet.getMin());
