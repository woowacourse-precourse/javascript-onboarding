const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const answer = [];
  let price = money;

  if (!isValidMoney(money, 1, 1000000)) return;

  moneyUnit.forEach((unit, index) => {
    const count = Math.floor(price / unit);
    answer[index] = count;
    price -= count * unit;
  });

  return answer;
}

function isValidMoney(money, min, max) {
  if (money < min || money > max) {
    console.error(`money는 ${min} 이상 ${max.toLocaleString()} 이하입니다`);
    return false;
  }
  return true;
}

module.exports = problem5;
