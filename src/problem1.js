function checkInvalidity(pageList) {
  const leftPage = pageList[0];
  const rightPage = pageList[1];
  if (leftPage < 3 || rightPage > 398) return true;
  if (rightPage - leftPage !== 1) return true;
  if (leftPage % 2 !== 1) return true;
  return false;
}

function caculateScore(page) {
  const numArr = String(page).split("");
  const addScore = numArr.reduce((acc, cur) => (acc += parseInt(cur)), 0);
  const multiplyScore = numArr.reduce((acc, cur) => (acc *= parseInt(cur)), 1);
  return Math.max(addScore, multiplyScore);
}

function decideWinner(pobiScore, crongScore) {
  if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else return 0;
}

function problem1(pobi, crong) {
  if (checkInvalidity(pobi) | checkInvalidity(crong)) return -1;
  const pobiScore = Math.max(caculateScore(pobi[0]), caculateScore(pobi[1]));
  const crongScore = Math.max(caculateScore(crong[0]), caculateScore(crong[1]));
  return decideWinner(pobiScore, crongScore);
}

module.exports = problem1;
