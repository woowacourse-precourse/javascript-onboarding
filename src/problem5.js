function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let mnyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < 9; i++) {
    answer[i] += parseInt(money / mnyArr[i]);
    money = money % mnyArr[i];
  }
  return answer;
}

module.exports = problem5;
