function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let change = money;

  const answer = units.map((unit) => {
    const count = parseInt(change / unit, 10);
    change %= unit;
    return count;
  })
  return answer;
}
module.exports = problem5;
