function problem5(money) {
  const condition = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = Array.from({ length: 9 }, () => 0);
  condition.forEach((el, idx) => {
    if (money >= el) {
      let count = Math.floor(money / el);
      money = money - count * el;
      result[idx] = count;
    }
  });
  return result;
}

module.exports = problem5;
