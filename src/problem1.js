function problem1(pobi, crong) {
  var answer;

  answer = winner(pobi, crong);

  return answer;
}

function winner(player1, player2) {
  var result;

  // 제한사항 위반 검사
  if (violationChk(player1, player2)) {
    // 위반사항 없을 시 각각 점수 계산
    var score1 = scoreCalulator(player1);
    var score2 = scoreCalulator(player2);

    // player1 승리
    if (score1 > score2) {
      result = 1;
      // player2 승리
    } else if (score1 < score2) {
      result = 2;
      // 무승부
    } else {
      result = 0;
    }
    // 제한사항 위반 시
  } else {
    result = -1;
  }

  return result;
}

module.exports = problem1;
