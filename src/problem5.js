function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  for (let i = 0; i < 9; i++) {
    const unit = units[i];
    answer.push(parseInt(money / unit));
    money %= unit;
  }
  return answer;
}

module.exports = problem5;
