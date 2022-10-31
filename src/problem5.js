function problem5(money) {
  const UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  var answer = UNITS.map(unit => {
    cnt = Math.floor(money / unit);
    money %= unit;
    return cnt;
  });
  return answer;
}

module.exports = problem5;
