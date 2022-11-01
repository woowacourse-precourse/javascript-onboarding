function isValidPg(page) {
  if (page[0] === 1 || page[1] === 400) return false;
  else return true;
}

function isContinuityPg(page) {
  if (page[1] - page[0] !== 1) return false;
  else return true;
}

function problem1(pobi, crong) {
  var answer;
  let answer;

  if (!isValidPg(pobi) || !isValidPg(crong)) return -1;
  if (!isContinuityPg(pobi) || !isContinuityPg(crong)) return -1;

  return answer;
}
module.exports = problem1;