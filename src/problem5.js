function problem5(money) {
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for (i=0; i<coins.length; i++) {
      const count = parseInt(money / coins[i]);
      answer[i] = count
      money -= (coins[i] * count);
  }
  return answer;
}

module.exports = problem5;
