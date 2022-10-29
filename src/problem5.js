function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = Array.from({ length: units });

  let temp = money;
  for (let i = 0; i < units.length; i++) {
    result[i] = Math.floor(temp / units[i]);
    temp %= units[i];
  }

  return result;
}

module.exports = problem5;
