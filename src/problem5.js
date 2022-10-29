/**
 * 가능한 큰 금액을 많이 빼면 좋다
 */
function problem5(money) {
  const exchanged = exchange(money);
  return exchanged;
}

function exchange(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  units.forEach((unit, idx) => {
    while (money - unit >= 0) {
      money -= unit;
      counts[idx]++;
    }
  });
  return counts;
}

module.exports = problem5;
