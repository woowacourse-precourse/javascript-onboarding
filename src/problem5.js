function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = units.map((unit) => {
    if (money / unit > 1) {
      const num = Math.floor(money / unit);
      money -= num * unit;
      return num;
    } else {
      return 0;
    }
  });
  return answer;
}

module.exports = problem5;
