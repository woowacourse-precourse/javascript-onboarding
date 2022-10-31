function isValid(money) {
  return (
    typeof money !== 'number' ||
    (money < 1 || money > 1000000) ||
    money !== Math.floor(money)
  ) ? false : true;
}

function fillMoneyArr(money, unitMoney) {
  const moneyArr = [];
  for (let i = 0; i < unitMoney.length; i++) {
    moneyArr.push(Math.floor(money / unitMoney[i]));
    money -= Math.floor(money / unitMoney[i]) * unitMoney[i];
  }

  return moneyArr;
}

function getMoneyArr(money) {
  const unitMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return fillMoneyArr(money, unitMoney);
}

function problem5(money) {
  if (!isValid(money)) {
    return;
  }

  return getMoneyArr(money);
}

module.exports = problem5;
