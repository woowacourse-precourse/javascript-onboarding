function problem5(money) {
  const answer = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1].reduce(
    (acc, cur) => {
      const count = Math.floor(money / cur);
      money %= cur;
      return [...acc, count];
    },
    []
  );

  return answer;
}

module.exports = problem5;
