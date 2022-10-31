function problem5(money) {
  const unitList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answerList = unitList.map((unit) => {
    const count = Math.floor(money / unit);
    money -= count * unit;
    return count;
  });

  return answerList;
}

module.exports = problem5;
