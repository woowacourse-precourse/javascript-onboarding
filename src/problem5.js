function problem5(money) {
  let answer = [];
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < unit.length; i++) {
    answer.push(Math.floor(money / unit[i]));
    money %= unit[i];
  }

  return answer;
}

module.exports = problem5;
