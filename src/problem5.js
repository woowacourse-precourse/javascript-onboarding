function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let change = money;
  let answer = unit.map((unit) => {
    const count = Math.floor(change / unit);
    change = Math.floor(change % unit);
    return count;
  });
  return answer;
}

module.exports = problem5;
