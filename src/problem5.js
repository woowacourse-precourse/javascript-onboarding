function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const currencyCount = currency.length;
  var answer = new Array(currencyCount);

  for (let i = 0; i < currencyCount; ++i) {
    answer[i] = parseInt(money / currency[i]);
    money %= currency[i];
  }
  return answer;
}

module.exports = problem5;
