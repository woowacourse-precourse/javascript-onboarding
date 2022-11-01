const Result = Object.freeze({
  POBI_WIN: 1,
  CRONG_WIN: 2,
  DRAW: 0,
  EXCEPTION: -1
})

function isValidPages(pages) {
  const [leftPage, rightPage] = pages;

  if (1 <= leftPage && leftPage <= 399 && (leftPage & 1) && 
      leftPage + 1 == rightPage) {
    return (true);
  }
  return (false);
}

function getScore(pages) {
  let score = 0;

  for (const page of pages) {
    const pageDigits = String(page).split('');
    let digitSum = 0;
    let digitProduct = 1;

    for (const digit of pageDigits) {
      digitSum += Number(digit);
      digitProduct *= digit;
    }
    score = Math.max(score, digitSum, digitProduct);
  }
  return score;
}

function problem1(pobi, crong) {
  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return Result.EXCEPTION;
  }

  var answer;
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  if (pobiScore > crongScore) {
    answer = Result.POBI_WIN;
  } else if (pobiScore < crongScore) {
    answer = Result.CRONG_WIN;
  } else {
    answer = Result.DRAW;
  }
  return answer;
}

module.exports = problem1;
