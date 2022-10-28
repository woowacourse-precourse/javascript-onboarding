function problem1(pobi, crong) {
  const answer = makeMaxNumber(pobi, crong)
  return answer;
}


function makeMaxNumber(pobi, crong) {
  // 입력값에 대한 각각의 예외처리 우선시!
  if (!checkValid(pobi) || !checkValid(crong)) return -1
  return 1
  // 이후 메인 로직()
}

function checkValid(userName) {
  if (!isDuplicate(userName)) return false
  if (!isNotFitNumber(userName)) return false
  if (!notInRange(userName)) return false
  if (!betweenValue(userName)) return false
  return true
}

function isDuplicate(userName) {
  if (userName[0] === userName[1]) return false;
  return true
}

function isNotFitNumber(userName) {
  if (userName[0] % 2 !== 1 || userName[1] % 2 !== 0) return false
  return true
}

function betweenValue(userName) {
  if (userName[1] - userName[0] !== 1) return false;
  return true
}

function notInRange(userName) {
  if (!correctRange(userName[0]) || !correctRange(userName[1])) return false;
  return true
}

function correctRange(pageNumber) {
  const minPage = 1;
  const maxPage = 400;
  if (pageNumber >= minPage && pageNumber <= maxPage) return true
  return false
}

module.exports = problem1;