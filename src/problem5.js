function problem5(money) {
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < moneyArr.length; i++) {
    const item = moneyArr[i];
    const count = Math.floor(money / item);
    answer[i] += count;
    money -= count * item;
  }
  return answer;
}

module.exports = problem5;
