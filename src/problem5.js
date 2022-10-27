function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let idx = 0;
  while (money > 0) {
    money = money % unit[idx];
    idx += 1;
    console.log(money);
  }
}

module.exports = problem5;
