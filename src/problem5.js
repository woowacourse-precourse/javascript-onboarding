function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];
  let remaining = money;
  
  units.forEach((unit) => {
    result.push(Math.floor(remaining / unit));
    remaining %= unit;
  });

  return result;
}

module.exports = problem5;
