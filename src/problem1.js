const [MIN_PAGE, MAX_PAGE] = [1, 400];
const RESULT = {
  DRAW: 0,
  POBI_WIN: 1,
  CRONG_WIN: 2,
  ERROR: -1,
};
Object.freeze(RESULT);

function checkPagesIsValid(pages) {
  if (pages.length !== 2) return false;

  var [left, right] = pages;
  if (right - left !== 1 || left <= MIN_PAGE || right >= MAX_PAGE) return false;

  return true;
}

function getScore([left, right]) {
  return Math.max(
    sumPageNum(left),
    sumPageNum(right),
    mulPageNum(left),
    mulPageNum(right)
  );
}

function sliceNumMakeArr(page) {
  var pageArr = [];
  do {
    var q = parseInt(page % 10);
    pageArr.push(q);
    page = page / 10;
  } while (page > 1);
  return pageArr;
}

function sumPageNum(page) {
  var numArr = sliceNumMakeArr(page);
  return numArr.reduce((a, b) => a + b);
}

function mulPageNum(page) {
  var numArr = sliceNumMakeArr(page);
  return numArr.reduce((a, b) => a * b);
}

function problem1(pobi, crong) {
  if (!checkPagesIsValid(pobi) || !checkPagesIsValid(crong))
    return RESULT.ERROR;

  var pobiScore = getScore(pobi);
  var crongScore = getScore(crong);

  if (pobiScore === crongScore) return RESULT.DRAW;
  if (pobiScore > crongScore) return RESULT.POBI_WIN;
  return RESULT.CRONG_WIN;
}

module.exports = problem1;
