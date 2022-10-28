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

function checkExceptions([leftPage, rightPage]) {
  let isValid = true; 

  if (rightPage - leftPage !== 1) isValid = false;
  else if (leftPage % 2 !== 1 && rightPage % 2 !== 0) isValid = false; 
  else if (leftPage <= 1 || rightPage >= 400) isValid = false; 

  return isValid;
}

function problem1(pobi, crong) {
  const pobiIsValid = checkExceptions(pobi);
  const crongIsValid = checkExceptions(crong);

  if (!pobiIsValid || !crongIsValid) return -1; 

  const pobiMaxScore = getPlayerMaxScore(pobi);
  const crongMaxScore = getPlayerMaxScore(crong);
  let result; 

  if (pobiMaxScore > crongMaxScore) result = 1;
  else if (pobiMaxScore < crongMaxScore) result = 2; 
  else if (pobiMaxScore === crongMaxScore) result = 0;
  else result = -1; 

  return result; 
}

module.exports = problem1;
