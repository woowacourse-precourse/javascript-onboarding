function problem5(money) {
  let moneyInPulse = money;
  const papers = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return papers.map((paper) => {
    const count = parseInt(moneyInPulse / paper);
    moneyInPulse = moneyInPulse % paper;
    return count;
  });
}

module.exports = problem5;
