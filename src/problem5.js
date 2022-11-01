function isException(number) {
  return (
    isNaN(number) || !Number.isInteger(number) || number < 1 || number > 1000000
  );
}

function moneyExchange(money, unit, answer) {
  const q = Math.trunc(money / unit);

  answer.push(q);
  if (q > 0) {
    money %= unit;
  }
  return money;
}

function problem5(money) {
  if (isException(money)) return;
  let answer = [];

  money = moneyExchange(money, 50000, answer);
  money = moneyExchange(money, 10000, answer);
  money = moneyExchange(money, 5000, answer);
  money = moneyExchange(money, 1000, answer);
  money = moneyExchange(money, 500, answer);
  money = moneyExchange(money, 100, answer);
  money = moneyExchange(money, 50, answer);
  money = moneyExchange(money, 10, answer);
  moneyExchange(money, 1, answer);
  return answer;
}

module.exports = problem5;
