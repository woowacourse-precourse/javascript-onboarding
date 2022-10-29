const Bank = {
  amount: 0,
  result: Array.from({ length: 9 }),
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
