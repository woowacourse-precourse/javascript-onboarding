const {
  compareLeftRight,
  whoIsWin,
  checkInputError,
  ERROR,
} = require("./problem1.util");

function problem1(pobi, crong) {
  if (checkInputError(pobi) || checkInputError(crong)) return ERROR;
  const pobiNum = compareLeftRight(pobi);
  const crongNum = compareLeftRight(crong);
  const answer = whoIsWin(pobiNum, crongNum);
  return answer;
}

module.exports = problem1;
