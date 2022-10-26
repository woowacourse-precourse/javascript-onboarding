function checkValidation() {
  //입력된 페이지가 유효한지 검증
}

function calculateTotalScore() {
  //펼친 페이지의 score 계산
}

function problem1(pobi, crong) {
  if (!checkValidation(pobi) || !checkValidation(crong))
    return -1;
  const score1 = calculateTotalScore(pobi);
  const score2 = calculateTotalScore(crong);
  return score1 > score2 ? 1 : (score1 < score2 ? 2 : 0);
}

module.exports = problem1;
