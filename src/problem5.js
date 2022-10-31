function calculate(money) {
  let dividedMoney = [];

  dividedMoney.push(Math.floor(money / 50000));
  money = money % 50000;
  dividedMoney.push(Math.floor(money / 10000));
  money = money % 10000;
  dividedMoney.push(Math.floor(money / 5000));
  money = money % 5000;
  dividedMoney.push(Math.floor(money / 1000));
  money = money % 1000;
  dividedMoney.push(Math.floor(money / 500));
  money = money % 500;
  dividedMoney.push(Math.floor(money / 100));
  money = money % 100;
  dividedMoney.push(Math.floor(money / 50));
  money = money % 50;
  dividedMoney.push(Math.floor(money / 10));
  money = money % 10;
  dividedMoney.push(money);
  return dividedMoney;
}

function problem5(money) {
  let answer = calculate(money);
  return answer;
}

module.exports = problem5;
