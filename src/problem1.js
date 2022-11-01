const isValid = (pobi, crong) => {
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  if (pobiRight - pobiLeft > 1 || crongRight - crongLeft > 1) return false;
  if ([...pobi, ...crong].some((page) => page > 400 || page < 1)) return false;

  return true;
};

const createResults = (page) => {
  const splitPage = page.toString().split("");

  return [
    splitPage.reduce((total, currentNum) => +total + +currentNum),
    splitPage.reduce((total, currentNum) => +total * +currentNum),
  ];
};

const problem1 = (pobi, crong) => {
  if (!isValid(pobi, crong)) return -1;

  const pobiBest = Math.max(...pobi.flatMap((page) => createResults(page)));
  const crongBest = Math.max(...crong.flatMap((page) => createResults(page)));

  return pobiBest > crongBest ? 1 : pobiBest < crongBest ? 2 : 0;
};

module.exports = problem1;
