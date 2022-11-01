class ErrorCase {
  constructor(money) {
    this._money = money;
    this.checkLimit();
  }

  checkLimit() {
    return 1 <= this._money && this._money <= 1000000;
  }
}

class Bank {
  constructor(money) {
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
  const error = new ErrorCase(money);

  if (!error.checkLimit()) {
    console.log("input 양식이 제한사항에 맞게 주어지지 않았습니다.");
    return;
  }

  const bank = new Bank(money);
  return bank.giveChange();
}

module.exports = problem5;
