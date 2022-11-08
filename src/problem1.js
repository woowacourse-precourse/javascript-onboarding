// constant 선언
const START_PAGE = 1;
const END_PAGE = 400;

const GAME_DRAW = 0;
const POBI_WIN = 1;
const CRONG_WIN = 2;

function problem1(pobi, crong) {
  if (checkValidation(pobi) && checkValidation(crong)) {
    return pageGameApp(pobi, crong);
  }
  return -1;
}

function checkValidation([leftPage, rightPage]) {
  return (
    [leftPage, rightPage].every(
      page => START_PAGE <= page && page <= END_PAGE,
    ) && rightPage - leftPage === 1
  );
}

function pageGameApp(pobi, crong) {
  const [pobiMaxScore, crongMaxScore] = [pobi, crong].map(maxValueCalculator);
  if (pobiMaxScore === crongMaxScore) return GAME_DRAW;
  return pobiMaxScore > crongMaxScore ? POBI_WIN : CRONG_WIN;
}

function maxValueCalculator(pages) {
  return Math.max(...splitNumberSum(pages), ...splitNumberMul(pages));
}

function splitNumber(number) {
  return (number + '').split('').map(Number);
}

function splitNumberSum(bothPages) {
  return bothPages.map(page =>
    splitNumber(page).reduce(
      (totalSum, splitNumber) => (totalSum += splitNumber),
    ),
  );
}

function splitNumberMul(bothPages) {
  return bothPages.map(page =>
    splitNumber(page).reduce(
      (totalMul, splitNumber) => (totalMul *= splitNumber),
      1,
    ),
  );
}

module.exports = problem1;
