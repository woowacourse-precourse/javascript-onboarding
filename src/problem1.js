function isValidPages(pages) {
  var leftPage = pages[0];
  var rightPage = pages[1];

  if (1 <= leftPage && leftPage <= 399 && leftPage + 1 == rightPage) {
    return (true);
  }
  return (false);
}

function getScore(pages) {
  var score = 0;

  pages.forEach(page => {
    var pageDigits = String(page).split('');
    var digitSum = 0;
    var digitProduct = 1;

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
  var pobiScore = getScore(pobi);
  var crongScore = getScore(crong);

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
