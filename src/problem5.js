function problem5(money) {
  const answer = [];
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (const c of currency) {
    let [quotient, remainder] = [parseInt(money / c), money % c];

    answer.push(quotient);
    money = remainder;
  }

  return answer;
}

module.exports = problem5;
