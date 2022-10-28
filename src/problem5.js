function problem5(money) {
  const MONETARY_UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const answer = MONETARY_UNITS.map((unit) => {
    const [maxCount, remain] = changeMaxCount(money, unit);

    money = remain;
    return maxCount;
  });

  return answer;
}

const changeMaxCount = (total, base) => {
  return [parseInt(total / base), total % base];
};

module.exports = problem5;
