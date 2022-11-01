function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) {
    return -1;
  }
  else {
    pobiScore = Math.max(getMaxScore(pobi[0]), getMaxScore(pobi[1]));
    crongScore = Math.max(getMaxScore(crong[0]), getMaxScore(crong[1]));
    return getWinner(pobiScore, crongScore);
  }
}

function getMaxScore(page) {
  var digits = page.toString().split('').map(Number);
  pageSum = 0;
  pageMul = 1;

  digits.forEach(digit => {
    pageSum += digit;
    pageMul *= digit;
  });

  return Math.max(pageSum, pageMul);
}

function getWinner(scoreA, scoreB) {
  if (scoreA > scoreB)  return 1;
  else if (scoreA < scoreB) return 2;
  else if (scoreA == scoreB)  return 0;
  else return -1;
}

function isValidPage(pages) {
  if (pages[1] > 400) return false
  if (pages[1] - pages[0] != 1) return false;
  else  return true;
}

module.exports = problem1;
