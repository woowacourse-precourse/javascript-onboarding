const findLargestMoneyUnit = (money) => {
  if (money >= 50000) return 50000;
  if (money >= 10000) return 10000;
  if (money >= 5000) return 5000;
  if (money >= 1000) return 1000;
  if (money >= 500) return 500;
  if (money >= 100) return 100;
  if (money >= 50) return 50;
  if (money >= 10) return 10;
  if (money >= 1) return 1;
};

const findWalletArrayIndex = (money) => {
  if (money === 50000) return 0;
  if (money === 10000) return 1;
  if (money === 5000) return 2;
  if (money === 1000) return 3;
  if (money === 500) return 4;
  if (money === 100) return 5;
  if (money === 50) return 6;
  if (money === 10) return 7;
  if (money === 1) return 8;
};

function problem5(money) {
  const wallet = Array.from({ length: 9 }, () => 0);
  while (money > 0) {
    const largestMoneyUnit = findLargestMoneyUnit(money);
    const walletIndex = findWalletArrayIndex(largestMoneyUnit);

    wallet[walletIndex]++;
    money -= largestMoneyUnit;
  }
  return wallet;
}

module.exports = problem5;
