function problem5(money) {
  const bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for (const bill of bills) {
    const billCnt = Math.trunc(money / bill);
    const remains = money % bill;
    answer.push(billCnt);
    money = remains;
  }
  return answer;
}

module.exports = problem5;
