function problem1(pobi, crong) {
  // 예외사항은 -1로 return한다.
  if (!isValidPages(pobi) || !isValidParam(crong)) {
    return -1
  }

  // pobi와 crong의 점수를 구한다.
  const scorePobi = getScoreByPages(pobi)
  const scoreCrong = getScoreByPages(crong)

  // 두 점수를 비교하여 적절한 값을 리턴한다.
  if (scorePobi > scoreCrong) {
    return 1 // 포비 승
  } else if (scorePobi < scoreCrong) {
    return 2 // 크롱 승
  } else {
    return 0 // 무승부
  }
}

// TODO: 양 페이지로 입력받은 값이 적절한지 검사한다.
function isValidParam(pages) {
  return true
}

// TODO: 양 페이지로 입력받은 값으로부터 점수를 계산한다.
function getScoreByPages(pages) {
  return 0
}

module.exports = problem1;
