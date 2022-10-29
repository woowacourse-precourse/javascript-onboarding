const FIRST_PAGE = 1;
const LAST_PAGE = 400;
const EXCEPTION = -1;
const POBI = 1;
const CRONG = 2;
const DRAW = 0;

function problem1(pobi, crong) {
  if (!validate(pobi) || !validate(crong)) return EXCEPTION;
}

function validate(pages) {
  const [left, right] = pages;
  const isOutOfBook = left < FIRST_PAGE || right > LAST_PAGE;
  const isSequence = left + 1 === right;

  if (isOutOfBook || !isSequence) return false;

  return true;
}

module.exports = problem1;
