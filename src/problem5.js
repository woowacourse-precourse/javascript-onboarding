function problem5(money) {
  let changes = money;
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyTypeList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < 9; i++) {
    if (changes >= moneyTypeList[i]) {
      answer[i] = Math.floor(changes / moneyTypeList[i]);
      changes -= answer[i] * moneyTypeList[i];
    }
  }
  return answer;
}

module.exports = problem5;
