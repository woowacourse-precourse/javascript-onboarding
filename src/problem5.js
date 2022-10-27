function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const arr = Array.from({ length: unit.length }, () => 0);
  let idx = 0;
  while (money > 0) {
    arr[idx] = Math.floor(money / unit[idx]);
    money = money % unit[idx];
    idx += 1;
  }
  return arr;
}

module.exports = problem5;
