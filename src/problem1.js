const FIRSTPAGE = 1;
const LASTPAGE = 400;
const NEERPAGE = 1;

const isWrongPageRange = (bookPage) => {
  const [leftPage, _] = bookPage;
  return leftPage < 1 || leftPage > 400;
};
const isLeftPageHasEvenPage = (bookPage) => {
  const [leftPage, _] = bookPage;
  return leftPage % 2 === 0;
};
const isBookPageToneApart = (bookPage) => {
  const [leftPage, rightPage] = bookPage;
  return rightPage - leftPage !== NEERPAGE;
};

const isFirstPage = (bookPage) => bookPage.includes(FIRSTPAGE);

const isLastPage = (bookPage) => bookPage.includes(LASTPAGE);

const isExceptionSituationOccurred = (bookPage) => {
  return (
    isWrongPageRange(bookPage) ||
    isLeftPageHasEvenPage(bookPage) ||
    isBookPageToneApart(bookPage) ||
    isFirstPage(bookPage) ||
    isLastPage(bookPage)
  );
};

const selectMaxValue = (arr) =>
  Math.max(...[...arr.map(eachDigitAllAdd), ...arr.map(eachDigitAllMultiply)]);

const eachDigitAllAdd = (bookPage) =>
  String(bookPage)
    .split("")
    .reduce((prev, curr) => prev + Number(curr), 0);

const eachDigitAllMultiply = (bookPage) =>
  String(bookPage)
    .split("")
    .reduce((prev, curr) => prev * Number(curr), 1);

function problem1(pobi, crong) {
  if (isExceptionSituationOccurred(pobi) || isExceptionSituationOccurred(crong))
    return -1;

  const maxPobi = selectMaxValue(pobi);
  const maxCrong = selectMaxValue(crong);

}

module.exports = problem1;
