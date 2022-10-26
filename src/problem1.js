function problem1(pobi, crong) {
  var answer;
  return answer;
}

function isPageError({ leftPage, rightPage }) {
  if (rightPage - leftPage !== 1) {
    return true;
  }

  if (!(1 <= leftPage && leftPage <= 399)) {
    return true;
  }

  if (!(2 <= rightPage && rightPage <= 400)) {
    return true;
  }

  return false;
}

module.exports = problem1;
