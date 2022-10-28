function problem5(money) {
  const answer = exchangeMoney(money);
  return answer;
}

function exchangeMoney(money) {
  const moneyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < moneyUnits.length; i++) {
    const share = Math.floor(money / moneyUnits[i]);
    if (share) {
      result[i] = share;
      money -= share * moneyUnits[i];
    }
  }
  return result;
}

module.exports = problem5;
