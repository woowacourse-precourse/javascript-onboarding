function problem5(money) {
  var answer;
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answerArr = new Array(9).fill(0);
  let idx = 0;
  while (money) {
    while (money >= moneyArr[idx]) {
      money -= moneyArr[idx];
      answerArr[idx] += 1;
    }
    idx += 1;
  }
  answer = answerArr;
  return answer;
}

module.exports = problem5;
