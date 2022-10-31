const BILL = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let changes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < BILL.length; i++) {
    if (money < BILL[i]) continue;

    changes[i] = Math.floor(money / BILL[i]);
    money = money % BILL[i];
  }

  return changes;
}

module.exports = problem5;
