function problem5(money) {
  if (!checkException(money)) return;
  const answer = new Array(9);
  answer.fill(0);
  const m = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < m.length; i++) {
    const x = m[i];
    if (parseInt(money / x) === 0) continue;
    else {
      answer[i] = parseInt(money / x);
      money %= x;
    }
  }
  return answer;
}
function checkException(money) {
  x = money >= 1 && money <= 1000000;
  y = money === parseInt(money);
  return x && y;
}
module.exports = problem5;
