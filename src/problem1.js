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
      digit = Number(digit);
      digitSum += digit;
      digitProduct *= digit;
    });
    score = Math.max(score, digitSum, digitProduct);
  });
  return score;
}

function problem1(pobi, crong) {
  var answer;

  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return -1;
  }
  if (getScore(pobi) > getScore(crong)) {
    answer = 1;
  } else if (getScore(pobi) < getScore(crong)) {
    answer = 2;
  } else {
    answer = 0;
  }
  return answer;
}

module.exports = problem1;
