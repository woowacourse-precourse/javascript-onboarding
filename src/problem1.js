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

module.exports = problem1;
