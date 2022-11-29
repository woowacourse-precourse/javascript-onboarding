class Bank {
  constructor() {
    this.money = 0;
  }

  withdraw(money) {
    this.money = money;
    return this.exchange();
  }

  exchange() {
    const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    const result = [];
    moneyType.forEach((type) => {
      result.push(~~(this.money / type));
      this.money = this.money % type;
    });
    return result;
  }
}

function problem5(money) {
  const bank = new Bank();
  return bank.withdraw(money);
}

module.exports = problem5;
