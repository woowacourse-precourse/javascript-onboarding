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

module.exports = problem1;