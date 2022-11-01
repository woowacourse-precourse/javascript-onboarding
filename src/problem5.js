function problem5(money) {
  const typeOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let withdrawal = money;

  money

  let answer = [];
  typeOfMoney.forEach((currency) => {
    answer.push(Math.floor(withdrawal / currency));
    withdrawal %= currency;
  });
  return answer;
}

module.exports = problem5;
