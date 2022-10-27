function problem5(money) {
  const answer = [];
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < currency.length; i++) {
    let count = 0;

    count += Math.floor(Number(money / currency[i]));
    money %= currency[i];
    answer.push(count);
  }

  return answer;
}

module.exports = problem5;
