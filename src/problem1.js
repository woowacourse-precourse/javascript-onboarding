const FIRST_PAGE = 1;
const LAST_PAGE = 400;
const EXCEPTION = -1;
const POBI = 1;
const CRONG = 2;
const DRAW = 0;

function problem1(pobi, crong) {
  if (!validate(pobi) || !validate(crong)) return EXCEPTION;

  const scorePobi = getMostScore(pobi);
  const scoreCrong = getMostScore(crong);

  return getWinner(scorePobi, scoreCrong);
}

function validate(pages) {
  const [left, right] = pages;
  const isOutOfBook = left < FIRST_PAGE || right > LAST_PAGE;
  const isSequence = left + 1 === right;

  if (isOutOfBook || !isSequence) return false;

  return true;
}

function getScore(page) {
  let num = page;
  let sum = 0;
  let multiple = 1;

  while (num !== 0) {
    const digit = num % 10;

    sum += digit;
    multiple *= digit;
    num = Math.floor(num / 10);
  }

  return sum > multiple ? sum : multiple;
}

function getMostScore(pages) {
  const [left, right] = pages;
  const scoreLeft = getScore(left);
  const scoreRight = getScore(right);
  return scoreLeft > scoreRight ? scoreLeft : scoreRight;
}

function getWinner(scorePobi, scoreCrong) {
  let winner;

  if (scorePobi > scoreCrong) {
    winner = POBI;
  } else if (scorePobi < scoreCrong) {
    winner = CRONG;
  } else {
    winner = DRAW;
  }

  return winner;
}

module.exports = problem1;
