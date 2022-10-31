function problem5(money) {
  const answer = Array(9).fill(0);
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < units.length; i++) {
    const unit = units[i];
    const 몫 = parseInt(money / unit);
    if (몫 > 0) {
      money = money % unit;
    }
    answer[i] += 몫;
  }

  return answer;
}

module.exports = problem5;
