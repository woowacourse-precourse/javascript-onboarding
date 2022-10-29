function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < unit.length; i++) {
    if (money >= unit[i]) {
      answer[i] = parseInt(money / unit[i]);
      money %= unit[i];
    }
  }

  return answer;
}

module.exports = problem5;
