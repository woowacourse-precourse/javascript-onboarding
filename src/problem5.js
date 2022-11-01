function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let quotient = 0;
  let remainder = money;
  for (let i = 0; i < moneyType.length; i++) {
    quotient = Math.floor(remainder / moneyType[i]);
    if (quotient > 0) {
      remainder -= quotient * moneyType[i];
    }
    answer[i] = quotient;
  }

  return answer;
}

module.exports = problem5;
