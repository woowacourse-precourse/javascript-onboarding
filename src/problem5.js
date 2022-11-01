const moneyChanger = (money) => {
  const monetaryUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const amountMoney = [];

  for(let i=0; i<monetaryUnit.length; i++) {
    let numberOfMoney = parseInt(money/monetaryUnit[i]);
    money = parseInt(money%monetaryUnit[i]);
    amountMoney.push(numberOfMoney);
  }
  return amountMoney;
}

function problem5(money) {
  return moneyChanger(money);
}

module.exports = problem5;
