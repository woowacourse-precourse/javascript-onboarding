function problem1(pobi, crong) {
  var answer;
  return answer;
}

function isException(leftPage, rightPage) {
  return (
      isNotPageDifference1(leftPage, rightPage) ||
      isNotPageRange(leftPage) ||
      isNotPageRange(rightPage) ||
      isInvalidPage(leftPage, rightPage)
  );
}

function isNotPageDifference1(leftPage, rightPage) {
  return rightPage - leftPage !== 1;
}

function isNotPageRange(page) {
  return page < 1 || page > 400;
}

function isInvalidPage(leftPage, rightPage) {
  return leftPage % 2 === 0 || rightPage % 2 === 1;
}

function calcScore(leftPage, rightPage) {
  const l = leftPage + '';
  const r = rightPage + '';

  return Math.max(
      [...l].map(num => +num).reduce((a, b) => a + b),
      [...l].map(num => +num).reduce((a, b) => a * b),
      [...r].map(num => +num).reduce((a, b) => a + b),
      [...r].map(num => +num).reduce((a, b) => a * b),
  );
}

module.exports = problem1;
