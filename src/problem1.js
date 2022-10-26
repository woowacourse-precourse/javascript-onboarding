function isInvalidInput(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage + 1 !== rightPage) return true;
  if (leftPage === 1 || rightPage === 400) return true;
  if (leftPage % 2 === 0 || rightPage % 2) return true;
  return false;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
