const Bank = {
  amount: 0,
  result: [],
  note: [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1],
  inputMoney: function (money) {
    if (!this.checkMoney(money)) {
      return false;
    }
    this.amount = money;
    return true;
  },
  checkMoney: function (money) {
    return money >= 1 && money <= 1000000;
  },
};

function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;
