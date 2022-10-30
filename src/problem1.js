function isValidPages(pages) {
  const [leftPage, rightPage] = pages;

  if (1 <= leftPage && leftPage <= 399 && leftPage + 1 == rightPage) {
    return (true);
  }
  return (false);
}

function getScore(pages) {
  let score = 0;

  pages.forEach(page => {
    const pageDigits = String(page).split('');
    let digitSum = 0;
    let digitProduct = 1;

    pageDigits.forEach(digit => {
      digitSum += Number(digit);
      digitProduct *= digit;
    });
    score = Math.max(score, digitSum, digitProduct);
  });
  return score;
}

function problem1(pobi, crong) {
  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return -1;
  }

  var answer;
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else {
    answer = 0;
  }
  return answer;
}

module.exports = problem1;
