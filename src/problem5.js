const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let price = money;

  if (money < 1 || money > 1000000) {
    console.error('money는 1 이상 1,000,000 이하입니다');
    return;
  }

  moneyUnit.forEach((unit, index) => {
    if (price >= unit) {
      const count = Math.floor(price / unit);
      answer[index] = count;
      price = price - count * unit;
    }
  });

  return answer;
}

module.exports = problem5;
