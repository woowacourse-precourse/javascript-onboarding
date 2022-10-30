const isExcept = (pageL, pageR) => {
  if (pageL >= pageR) return true;
  if (Math.abs(pageL - pageR) > 1) return true;
  if (!(pageL % 2)) return true;
  if (pageR % 2) return true;

  return false;
};

const getMaxScore = ([pageL, pageR]) => {
  if (isExcept(pageL, pageR)) return -1;

  const leftDigits = getDigits(pageL);
  const rightDigits = getDigits(pageR);

  return Math.max(calScore(leftDigits), calScore(rightDigits));
};

function problem1(pobi, crong) {
  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);

  if (pobiScore === -1) return -1;
  if (crongScore === -1) return -1;
  if (pobiScore === crongScore) return 0;
  return pobiScore > crongScore ? 1 : 2;
}

module.exports = problem1;
