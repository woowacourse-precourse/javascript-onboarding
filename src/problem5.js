function problem5(money) {
  let cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let list = Array(cash.length).fill(0);
  for (let i = 0; i < cash.length; i++) {
    if (money >= cash[i]) {
      while (money >= cash[i]) {
        money -= cash[i];
        list[i]++;
      }
    }
  }
  return list;
}

module.exports = problem5;
