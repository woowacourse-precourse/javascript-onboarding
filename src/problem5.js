function problem5(money) {
  //예외사항1
  if (money < 1 || money > 1000000) return 'ERROR';
  //예외사항2
  if (money % 1) return 'ERROR';

  const currencies = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const results = [];

  for (const currency of currencies) {
    const coin = Math.floor(money / currency);
    results.push(coin);

    money -= currency * coin;
  }

  return results;
}

module.exports = problem5;
