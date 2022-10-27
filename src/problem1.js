const isException = require("./modules/problem1/isException.js");
const getScore = require("./modules/problem1/getScore.js");

function problem1(pobi, crong) {
  if (isException(pobi) || isException(crong)) return -1;

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  return pobiScore !== crongScore ? (pobiScore > crongScore ? 1 : 2) : 0;
}

module.exports = problem1;
