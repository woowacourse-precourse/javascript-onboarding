function withrawCash({ wallet, money }) {
  let remainingMoney = money;

  const bills = Array.from(wallet.keys());

  for (const bill of bills) {
    if (remainingMoney === 0) {
      return;
    }

    if (remainingMoney < bill) {
      continue;
    }

    const billCount = parseInt(remainingMoney / bill);
    wallet.set(bill, billCount);
    remainingMoney -= billCount * bill;
  }
}

function problem5(money) {
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

  return Array.from(wallet.values());
}

console.log(problem5(50237));
console.log(problem5(15000));

module.exports = problem5;
