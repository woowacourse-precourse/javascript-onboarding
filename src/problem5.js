function problem5(money) {
  const denominations = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = denominations.map(denomination => {
    const count = Math.floor(money / denomination);
    money -= count * denomination;
    return count;
  });
  return answer;
}

module.exports = problem5;
