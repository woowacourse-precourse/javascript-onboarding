function getPapersUsed(money, papers, index) {
  if (index === papers.length) return [];
  return [Math.floor(money / papers[index]), ...getPapersUsed(money % papers[index], papers, index + 1)];
}

module.exports = getPapersUsed;
