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
}

module.exports = problem5;
