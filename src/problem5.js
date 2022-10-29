function problem5(money) {
  var answer;
  return answer;
}

function changeMoney(money) {
  const changedMoney = []
  const moneyArray = [50000, 10000, 5000, 1000, 100, 50, 10, 1];

  while (money > 0) {
    for (let i = 0; i < moneyArray.length; i++) {
      changedMoney.push(parseInt(money / moneyArray[i]));
      money = money % moneyArray[i];
    }
  }

  return changedMoney;
}

module.exports = problem5;
