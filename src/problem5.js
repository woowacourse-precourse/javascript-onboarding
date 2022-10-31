function getCurrencyNumber(money, type) {
  return Math.floor(money / type);
}

function withdrawMoney(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return currency.reduce((result, type) => {
    result.push(getCurrencyNumber(money, type));
    money %= type;
    return result;
  }, []);
}

function problem5(money) {
  const answer = withdrawMoney(money);
  return answer;
}
module.exports = problem5;
