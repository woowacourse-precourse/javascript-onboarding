const AMOUNT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

const problem5 = (money) => {
  const answer = Array(9).fill(0);

  AMOUNT.forEach((amount, i) => {
    answer[i] = Math.floor(money / amount);
    money %= amount;
  });

  return answer;
};

module.exports = problem5;
