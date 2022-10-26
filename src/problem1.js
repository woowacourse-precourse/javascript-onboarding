function problem1(p1, p2) {
  if (!isValidInput(p1) || !isValidInput(p2)) return -1;

  const p1Max = Math.max(...p1.map((page) => getPageScore(page)));
  const p2Max = Math.max(...p2.map((page) => getPageScore(page)));

  if (p1Max > p2Max) return 1;
  else if (p1Max < p2Max) return 2;
  else if (p1Max === p2Max) return 0;
  else return -1;
}

const isValidInput = (pageArr) => {
  const MIN_PAGE = 1;
  const MAX_PAGE = 400;

  if (pageArr.length !== 2) return false;

  if (pageArr[0] < MIN_PAGE || pageArr[1] < MIN_PAGE) return false;
  if (pageArr[0] > MAX_PAGE || pageArr[1] > MAX_PAGE) return false;

  if (pageArr[0] + 1 !== pageArr[1]) return false;

  if (pageArr[0] % 2 === 0 || pageArr[1] % 2 === 1) return false;

  return true;
};

const getPageScore = (pageNum) => {
  const splitted = [...pageNum.toString()].map(Number);

  return Math.max(
    splitted.reduce((acc, cur) => acc + cur),
    splitted.reduce((acc, cur) => acc * cur)
  );
};

module.exports = problem1;
