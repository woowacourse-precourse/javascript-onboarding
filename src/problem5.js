function problem5(money) {
  class moneyChanger {
    constructor(money) {
      this.money = money;
    }
    makeChange() {
      const moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
      const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      let balance = this.money;
      for (let i = 0; i < moneys.length; i++) {
        while (balance >= moneys[i]) {
          answer[i] = parseInt(balance / moneys[i]);
          balance = parseInt(balance % moneys[i]);
        }
      }
      return answer;
    }
  }

  return new moneyChanger(money).makeChange();
}

module.exports = problem5;
