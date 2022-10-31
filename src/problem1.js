function getSumOfEachDigitOfPage(page) {
  let sum = 0;
  [...page.toString()].forEach((digit) => (sum += parseInt(digit)));

  return sum;
}

function getProductOfEachDigitOfPage(page) {
  let product = 1;
  [...page.toString()].forEach((digit) => (product *= parseInt(digit)));

  return product;
}

function getLargerOfTwoNumbers(x, y) {
  return Math.max(x, y);
}

function getScore(pages) {
  let sum = 0;
  let product = 0;

  pages.forEach((page) => {
    sum = getSumOfEachDigitOfPage(page);
    product = getProductOfEachDigitOfPage(page);
  });

  return getLargerOfTwoNumbers(sum, product);
}

function getGameResult(pobiScore, crongScore) {
  let result = -1;

  if (pobiScore > crongScore) {
    result = 1;
  } else if (crongScore > pobiScore) {
    result = 2;
  } else {
    result = 0;
  }

  return result;
}

function isInputPagesValid(pages) {
  const [leftPage, rightPage] = pages;

  // 시작 면이나 마지막 면이 나오도록 책을 펼친 경우 (페이지 번호가 [1, 2] or [399, 400]이 있는 경우)
  if (
    (leftPage === 1 && rightPage === 2) ||
    (leftPage === 399 && rightPage === 400)
  ) {
    return false;
  }

  // 페이지 번호가 1이상 400 이하가 아닌 경우
  if (leftPage <= 0 || leftPage >= 401 || rightPage <= 0 || rightPage >= 401) {
    return false;
  }

  // (왼쪽페이지가 홀수, 오른쪽 페이지가 짝수)가 아닌 경우
  if (leftPage % 2 !== 1 || rightPage % 2 !== 0) {
    return false;
  }

  // (오른쪽 페이지 - 왼쪽페이지)가 1이 아닌 경우
  if (rightPage - leftPage !== 1) {
    return false;
  }

  return true;
}

function isInputValid(pobi, crong) {
  return isInputPagesValid(pobi) && isInputPagesValid(crong);
}

function problem1(pobi, crong) {
  if (!isInputValid(pobi, crong)) {
    return -1;
  }

  let answer;

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  answer = getGameResult(pobiScore, crongScore);
  return answer;
}

module.exports = problem1;
