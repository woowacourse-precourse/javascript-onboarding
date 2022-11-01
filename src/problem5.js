function problem5(money) {
  let moneyList = Array(9);
  let currentBill;
  moneyList.fill(0);
  
  currentBill = getBills(50000, 0, money, moneyList);
  currentBill = getBills(10000, 1, currentBill.remainMoney, currentBill.wallet);
  currentBill = getBills(5000, 2, currentBill.remainMoney, currentBill.wallet);
  currentBill = getBills(1000, 3, currentBill.remainMoney, currentBill.wallet);
  currentBill = getBills(500, 4, currentBill.remainMoney, currentBill.wallet);
  currentBill = getBills(100, 5, currentBill.remainMoney, currentBill.wallet);
  currentBill = getBills(50, 6, currentBill.remainMoney, currentBill.wallet);
  currentBill = getBills(10, 7, currentBill.remainMoney, currentBill.wallet);
  currentBill = getBills(1, 8, currentBill.remainMoney, currentBill.wallet);

  return currentBill.wallet;
}

function getBills(type, typeIndex, money, moneyList) {
  while(money >= type) {
    money -= type;
    moneyList[typeIndex]++;
  }

  return { remainMoney: money, wallet: moneyList };
}

module.exports = problem5;
