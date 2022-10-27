function addDigits(number) {
  let digits = number; 
  let digitsSum = 0;

  while (digits > 0) {
    digitsSum += digits % 10; 
    digits = Math.floor(digits / 10);
  }

  return digitsSum;
}

function multiplyDigits(number) {
  let digits = number;
  let digitsSum = 1;

  while (digits > 0) {
    digitsSum *= digits % 10;
    digits = Math.floor(digits / 10);
  }

  return digitsSum;
}

function getMaxScore(score1, score2) {
  return Math.max(score1, score2);
}

function getPlayerMaxPageScore(pageNumber) {
  const addedScore = addDigits(pageNumber);
  const multipliedScore = multiplyDigits(pageNumber);

  return getMaxScore(addedScore, multipliedScore);
}

function getPlayerMaxScore([leftPage, rightPage]) {
  const leftScore = getPlayerMaxPageScore(leftPage);
  const rightScore = getPlayerMaxPageScore(rightPage);

  return getMaxScore(leftScore, rightScore);
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
