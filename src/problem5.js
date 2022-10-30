function problem5(money) {
  var answer;

  const bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const billsCnt = Array.from({ length: 9 }, () => 0);

  for (let i = 0; i < bills.length; i++) {
    if (money >= bills[i]) {
      billsCnt[i] = Math.floor(money / bills[i]);
      money -= bills[i] * billsCnt[i];
    }
  }

  answer = billsCnt;
  return answer;
}

module.exports = problem5;
