const MONEY_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function divideMoney(money, moneyDigit) {
  return parseInt(money / moneyDigit);
}

function problem5(money) {
  let answer = [];

  MONEY_LIST.forEach(moneyDigit => {
    const divideCount = divideMoney(money, moneyDigit);
    money -= moneyDigit * divideCount;
    answer.push(divideCount);
  });

  return answer;
}

module.exports = problem5;
