function problem5(money) {
  if (!money || money > 1000000) throw new RangeError('매개변수는 1 이상 1,000,000 이하의 자연수여야 합니다.');

  const papers = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let paperCount = [];

  papers.forEach(paper => {
    paperCount = [...paperCount, Math.floor(money / paper)];
    money %= paper;
  })

  return paperCount;
}

module.exports = problem5;
