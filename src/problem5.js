function problem5(money) {
  const price = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = Array.from(Array(9), () => 0);

  for (let i = 0; i < 9; i++) {
    answer[i] += Math.floor(money / price[i]);
    money = money % price[i];
  }

  return answer;
}

module.exports = problem5;
