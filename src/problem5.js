function problem5(money) {
  if (money < 1 || money > 1000000 || money % 1 !== 0) {
    return "금액은 1 이상 1,000,000 이하의 자연수여야 합니다.";
  }
  var answer;
  const result = [];

  const getRemains = (money, divisor) => {
    let quotient = parseInt(money / divisor);
    result.push(quotient);
    return money - quotient * divisor;
  };

  money = getRemains(money, 50000);
  money = getRemains(money, 10000);
  money = getRemains(money, 5000);
  money = getRemains(money, 1000);
  money = getRemains(money, 500);
  money = getRemains(money, 100);
  money = getRemains(money, 50);
  money = getRemains(money, 10);
  money = getRemains(money, 1);

  answer = result;
  return answer;
}

module.exports = problem5;
