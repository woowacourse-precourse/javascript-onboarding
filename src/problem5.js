function problem5(money) {
  var answer = moneyExchange(money);
  return answer;
}

function moneyExchange(money) {
  let wallet = new Array(9).fill(0);
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  unit.reduce((acc, cur, index) => {
    const [bills, change] = valueExchanger(acc, cur);
    wallet[index] = bills;
    return change;
  }, money);
  return wallet;
}

function valueExchanger(money, unit) {
  return [parseInt(money / unit), money % unit];
}

module.exports = problem5;
