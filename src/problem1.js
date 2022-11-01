function cal(page) {
  const plus = String(page)
    .split('')
    .reduce((sum, val) => sum + Number(val), 0);

  const double = String(page)
    .split('')
    .reduce((sum, val) => sum * Number(val), 1);

  return Math.max(plus, mul);
}

function isValidPg(page) {
  if (page[0] === 1 || page[1] === 400) return false;
  else return true;
}

function isContinuityPg(page) {
  if (page[1] - page[0] !== 1) return false;
  else return true;
}

function problem1(pobi, crong) {
  let answer;

  if (!isValidPg(pobi) || !isValidPg(crong)) return -1;
  if (!isContinuityPg(pobi) || !isContinuityPg(crong)) return -1;

  return answer;
}
module.exports = problem1;