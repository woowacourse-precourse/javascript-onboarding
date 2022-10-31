const isValidPages = ([leftPage, rightPage]) => {
  const PAGE_DIFF = 1;
  const [MIN_PAGE, MAX_PAGE] = [1, 400];
  if (leftPage < MIN_PAGE || rightPage > MAX_PAGE) return false;
  if (rightPage - leftPage !== PAGE_DIFF) return false;
  return true;
};

const calcMaxValue = (page) => {
  const numbersArray = String(page).split("");
  const sum = numbersArray.reduce((acc, cur) => acc + Number(cur), 0);
  const multiple = numbersArray.reduce((acc, cur) => acc * Number(cur));
  return Math.max(sum, multiple);
};

const getScore = ([leftPage, rightPage]) => {
  const leftPageValue = calcMaxValue(leftPage);
  const rightPageValue = calcMaxValue(rightPage);
  return Math.max(leftPageValue, rightPageValue);
};

function problem1(pobi, crong) {
  if (!isValidPages(pobi) || !isValidPages(crong)) return -1;

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  return 0;
}

module.exports = problem1;
