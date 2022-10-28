function problem5(money) {
  const changeMaxCount = (total, base) => {
    const count = parseInt(total / base);
    const remain = total % base;
    return [count, remain];
  };

  let total = money;
  const MONETARY_UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const answer = MONETARY_UNITS.map((unit) => {
    const [count, remain] = changeMaxCount(total, unit);
    total = remain;
    return count;
  });

  return answer;
}

module.exports = problem5;
