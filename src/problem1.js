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

module.exports = problem1;
