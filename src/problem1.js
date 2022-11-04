const EXCEPTION = -1;
const EQUALITY = 0;
const GREATER_THAN = 1;
const LESS_THAN = 2;

function problem1(pobi, crong) {
  if (!validate(pobi) || !validate(crong)) {
    return EXCEPTION;
  }

  const pobiScore = getPlayerScore(pobi);
  const crongScore = getPlayerScore(crong);

  return compare(pobiScore, crongScore);
}

function validate(pages) {
  if (pages.length > 2) return false;

  const [left, right] = pages;

  return isInRange(left) && isInRange(right) && isConsecutive(left, right);
}

function getPlayerScore(pages) {
  const [left, right] = pages;
  const leftScore = getScore(left);
  const rightScore = getScore(right);

  return compare(leftScore, rightScore) === GREATER_THAN
    ? leftScore
    : rightScore;
}

function getScore(page) {
  const numbers = page.toString().split('').map(Number);
  const sum = add(numbers);
  const product = multiply(numbers);

  return compare(sum, product) === GREATER_THAN ? sum : product;
}

function compare(a, b) {
  if (a === b) return EQUALITY;

  return a > b ? GREATER_THAN : LESS_THAN;
}

function isInRange(value, min = 0, max = 400) {
  return min <= value && value <= max;
}

function isConsecutive(number1, number2) {
  return number1 < number2 && number1 === number2 - 1;
}

function add(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}

function multiply(array) {
  return array.reduce((acc, cur) => acc * cur, 1);
}

module.exports = problem1;
