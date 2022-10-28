function problem5(money) {
  const wallet = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for(const bill of wallet) {
    answer.push(Math.floor(money / bill));
    money %= bill;
  }
  return answer;
}

module.exports = problem5;
