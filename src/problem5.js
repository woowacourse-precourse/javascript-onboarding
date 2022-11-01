function problem5(money) {
  const PAY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const ANSWER = [];
  let wallet = money;

  for (let i = 0; i < PAY.length; i += 1) {
    ANSWER.push(Math.floor(wallet / PAY[i]));
    wallet %= PAY[i];
  }

  return ANSWER;
}

module.exports = problem5;
