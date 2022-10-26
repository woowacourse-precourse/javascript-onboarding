const problem1 = (pobi, crong) => {
  if (checkException(pobi, crong)) return -1;
}

const checkException = (player1, player2) => {
  return (player1[1] - player1[0] !== 1) || (player2[1] - player2[0] !== 1);
}

const getPageScore = (pageNum) => {
  const pageNumArr = [...String(pageNum)].map((n) => Number(n));
  const plussedScore = pageNumArr.reduce((acc, cur) => acc + cur);
  const multipliedScore = pageNumArr.reduce((acc, cur) => acc * cur);
  return plussedScore > multipliedScore ? plussedScore : multipliedScore;
}

module.exports = problem1;
