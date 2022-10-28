const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let price = money;

  moneyUnit.forEach((unit, index) => {
    if (price >= unit) {
      const count = Math.floor(price / unit);
      answer[index] = count;
    }
  });

  return answer;
}

module.exports = problem5;
