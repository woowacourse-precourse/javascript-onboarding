function isException(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage === 1 || rightPage === 400) return 1;
  if (rightPage - leftPage !== 1) return 1;
  return 0;
}

function exceptionCheck(pages1, pages2) {
  return isException(pages1) || isException(pages2);
}

function problem1(pobi, crong) {
  if (exceptionCheck(pobi, crong)) return -1;
  let answer;
  return answer;
}
module.exports = problem1;
