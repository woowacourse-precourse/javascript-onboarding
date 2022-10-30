function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let wallet = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  while(unit[i] <= money) {
    money -= unit[i];
    wallet[i]++;
  }
}

  module.exports = problem5;