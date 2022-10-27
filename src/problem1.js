function problem1(pobi, crong) {
  const isPobiVaid = checkInputIsValid(pobi);
  const isCrongValid = checkInputIsValid(crong);

  if (!(isPobiVaid && isCrongValid)) {
    return -1;
  }

  const pobiScroe = getScore(pobi);
  const crongScroe = getScore(crong);

  if (pobiScroe === crongScroe) return 0;
  if (pobiScroe > crongScroe) return 1;
  if (pobiScroe < crongScroe) return 2;
}

function checkInputIsValid(input) {
  if (input.length !== 2) return false;

  const [left, right] = input;
  const [startPage, lastPage] = [1, 400];

  if (left + 1 !== right) return false;
  if (left % 2 !== 1 && right % 2 !== 0) return false;
  if (left <= startPage || left >= lastPage) return false;
  if (right <= startPage || right >= lastPage) return false;

  return true;
}

function getScore([left, right]) {
  return Math.max(
    sumPageNum(left),
    multiplyPageNum(left),
    sumPageNum(right),
    multiplyPageNum(right),
  );
}

function sumPageNum(page) {
  const pageNumbers = splitPageNumbers(page);
  return pageNumbers.reduce((sum, num) => (sum += num), 0);
}

function multiplyPageNum(page) {
  const pageNumbers = splitPageNumbers(page);
  return pageNumbers.reduce((multi, num) => (multi *= num), 1);
}

function splitPageNumbers(page) {
  const pageEl = page.toString().split('');
  return pageEl.map(el => Number(el));
}

module.exports = problem1;
