function problem5(money) {
  if (!money || money > 1000000) throw new RangeError('매개변수는 1 이상 1,000,000 이하의 자연수여야 합니다.');
  
  let moneyInPulse = money;
  const papers = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return papers.map((paper) => {
    const count = parseInt(moneyInPulse / paper);
    moneyInPulse = moneyInPulse % paper;
    return count;
  });
}

module.exports = problem5;
