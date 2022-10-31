function problem5(money) {
  if (money < 1 || money > 1000000) return 'ERROR';
  if (money % 1) return 'ERROR';

  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];
  for (let i = 0; i < currency.length; i++) {
    const coin = Math.floor(money / currency[i]);
    answer.push(coin);
    money -= currency[i] * coin;
  }

  return answer;
}

module.exports = problem5;
