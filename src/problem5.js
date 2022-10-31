const getLargestMoney = (money) => {
  if (money >= 50000) return [0, 50000];
  if (money >= 10000) return [1, 10000];
  if (money >= 5000) return [2, 5000];
  if (money >= 1000) return [3, 1000];
  if (money >= 500) return [4, 500];
  if (money >= 100) return [5, 100];
  if (money >= 50) return [6, 50];
  if (money >= 10) return [7, 10];
  if (money >= 1) return [8, 1];
};

function problem5(money) {
  const wallet = Array.from({ length: 9 }, () => 0);

  while (money > 0) {
    const [index, largestMoney] = getLargestMoney(money);

    wallet[index]++;
    money -= largestMoney;
  }

  return wallet;
}

module.exports = problem5;
