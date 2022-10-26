function checkInvalidity(pageList) {
  const leftPage = pageList[0];
  const rightPage = pageList[1];
  if (leftPage < 3 || rightPage > 398) return true;
  if (rightPage - leftPage !== 1) return true;
  if (leftPage % 2 !== 1) return true;
  return false;
}

function problem1(pobi, crong) {
  if (checkInvalidity(pobi) | checkInvalidity(crong)) return -1;
  var answer;
  return answer;
}

module.exports = problem1;
