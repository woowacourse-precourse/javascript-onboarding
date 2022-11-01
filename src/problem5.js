function greedyWithdraw(money) {
  let withdrawArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyPriceArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < 9; i++) {
    withdrawArr[i] = Math.floor(money / moneyPriceArr[i]);
    money %= moneyPriceArr[i];
  }
  return withdrawArr;
}

function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;
