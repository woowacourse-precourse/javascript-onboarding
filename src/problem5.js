function problem5(money) {
  let answer = [];
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let item of unit) {
    answer.push(Math.floor(money / item));
    money = money % item;
  }

  return answer;
}

module.exports = problem5;
