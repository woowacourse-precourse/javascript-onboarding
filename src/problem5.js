function withrawCash({ wallet, money }) {
  let remainingMoney = money;

  const bills = Array.from(wallet.keys());

  for (const bill of bills) {
    console.log(bill);
  }
}

function problem5(money) {
  let answer;

  const wallet = new Map()
    .set(50000, 0)
    .set(10000, 0)
    .set(5000, 0)
    .set(1000, 0)
    .set(500, 0)
    .set(100, 0)
    .set(50, 0)
    .set(10, 0)
    .set(1, 0);

  withrawCash({ wallet, money });

  return answer;
}

console.log(problem5(50237));
console.log(problem5(15000));

module.exports = problem5;
