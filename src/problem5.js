const MONEY_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function divideMoney(money, moneyDigit) {
  return parseInt(money / moneyDigit);
}

function problem5(money) {
  var answer = [];

  for (i = 0; i < MONEY_LIST.length; i++) {
    const moneyDigit = MONEY_LIST[i];
    const divideCount = divideMoney(money, moneyDigit);
    money = money - moneyDigit * divideCount;
    answer.push(divideCount);
  }

  return answer;
}

module.exports = problem5;
