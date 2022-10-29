const checkValid = (money) => {
  if (!Number.isInteger(money)) return true;
  if (money < 1 || money > 1000000) return true;
  return false;
};

function problem5(money) {
  const kindOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const countMoney = [];

  if (checkValid(money)) return false;

  for (let i of kindOfMoney) {
    countMoney.push(Math.floor(money / i));
    money %= i;
  }

  return countMoney;
}

module.exports = problem5;
