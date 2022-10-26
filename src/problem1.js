const LAST_PAGE = 400;

function problem1(pobi, crong) {
  var answer;

  if (hasException(pobi) || hasException(crong)) {
    answer = -1;
  } else {
    // TODO
  }

  return answer;
}

/* 예외 처리 */
function hasException(pages) { 
  return isOutOfRange(pages) || isInvalid(pages) || isNotContinuous(pages);
}

function isOutOfRange(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage < 1 || rightPage > LAST_PAGE) {
    return true;
  }
  return false;
}

function isInvalid(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage % 2 !== 1 || rightPage % 2 === 1 || leftPage >= rightPage) {
    return true;
  }
  return false;
}

function isNotContinuous(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage + 1 !== rightPage) {
    return true;
  }
  return false;
}

module.exports = problem1;
