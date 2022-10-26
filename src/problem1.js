const checkException = (player1, player2) => {
  return (player1[1] - player1[0] !== 1) || (player2[1] - player2[0] !== 1);
};

const getPageScore = (pageNum) => {
  const pageNumArr = [...String(pageNum)].map((n) => Number(n));
  const plussedScore = pageNumArr.reduce((acc, cur) => acc + cur);
  const multipliedScore = pageNumArr.reduce((acc, cur) => acc * cur);
  return plussedScore > multipliedScore ? plussedScore : multipliedScore;
};

const getPlayerScore = (player) => {
  const [leftPageNum, rightPageNum] = player;
  const leftPageScore = getPageScore(leftPageNum);
  const rightPageScore = getPageScore(rightPageNum);
  return leftPageScore >= rightPageScore ? leftPageScore : rightPageScore;
};

const problem1 = (pobi, crong) => {
  if (checkException(pobi, crong)) return -1;
  const pobiScore = getPlayerScore(pobi);
  const crongScore = getPlayerScore(crong);

  if (pobiScore === crongScore) return 0;
  return pobiScore > crongScore ? 1 : 2;
};

module.exports = problem1;
