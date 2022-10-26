function problem1(pobi, crong) {
  const answer = solution(pobi, crong);
  return answer;
}

function isPageError([leftPage, rightPage]) {
  let isError = false;
  if (rightPage - leftPage !== 1) {
    isError = true;
  }

  if (!(1 <= leftPage && leftPage <= 399)) {
    isError = true;
  }

  if (!(2 <= rightPage && rightPage <= 400)) {
    isError = true;
  }

  return isError;
}

function calculateDigits(pages) {
  const resultPages = [];

  pages.forEach((page) => {
    let [sumDigit, multiplyDigit] = [0, 1];
    do {
      sumDigit += page % 10;
      multiplyDigit *= page % 10;
      page = Math.floor(page / 10);
    } while (page > 0);
    resultPages.push(sumDigit);
    resultPages.push(multiplyDigit);
  });

  return resultPages;
}

function pickBigNumber(user) {
  const calculatedPages = calculateDigits(user);
  return Math.max(...calculatedPages);
}

function solution(pobi, crong) {
  if (isPageError(pobi) || isPageError(crong)) {
    return -1;
  }

  const [pobiScore, crongScore] = [pickBigNumber(pobi), pickBigNumber(crong)];
  if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else if (pobiScore == crongScore) {
    return 0;
  }
}

module.exports = problem1;
