class ErrorCase {
  constructor(money) {
    this._money = money;
    this.checkLimit();
  }

  checkLimit() {
    if (!(1 <= this._money && this._money <= 1000000)) {
      throw new Error("input 양식에 에러가 발생했습니다!!");
    }
  }
}

class Bank {
  constructor(money) {
    new ErrorCase(money);

    this._money = money;
    this._moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  }

  giveChange() {
    const result = this._moneyUnit.map(() => 0);

    this._moneyUnit.forEach((unit, index) => {
      const share = Math.floor(this._money / unit);

      if (share > 0) {
        result[index] = share;
        this._money -= share * unit;
      }
    });

    return result;
  }
}

function problem5(money) {
  const bank = new Bank(money);
  return bank.giveChange();
}

module.exports = problem5;
