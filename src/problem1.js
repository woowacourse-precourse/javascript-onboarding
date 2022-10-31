function problem1(pobi, crong) {
  // 예외사항 처리 함수
  function exceptionHandling(pageInfo) {
    let left = pageInfo[0]
    let right = pageInfo[1]
    // 왼쪽 번호가 홀수, 오른쪽 번호가 짝수
    if (!(left % 2 == 1) || !(right % 2 == 0)) {
      return false
    }
    // 오른쪽 번호 = 왼쪽 번호 + 1
    if (!(right == left + 1)) {
      return false
    }
    return true
  }

  if (!exceptionHandling(pobi) || !exceptionHandling(crong)) {
    return -1
  }

  // 각 자리 숫자를 모두 더하거나 곱해 가장 큰 수를 반환하는 함수
  function sumMulNum(num) {
    sumNum = 0
    mulNum = 1
    for (let n of String(num)) {
      sumNum += parseInt(n)
      mulNum *= parseInt(n)
    }
    return Math.max(sumNum, mulNum)
  }

  // 포비와 크롱의 각 점수
  pobiScore = Math.max(sumMulNum(pobi[0]), sumMulNum(pobi[1]))
  crongScore = Math.max(sumMulNum(crong[0]), sumMulNum(crong[1]))

  // 포비와 크롱의 점수를 비교해 게임의 승자 가림
  if (pobiScore === crongScore) {
    return 0
  }
  else if (pobiScore > crongScore) {
    return 1
  }
  else {
    return 2
  }
}

module.exports = problem1;