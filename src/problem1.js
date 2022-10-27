function problem1(pobi, crong) {
  var answer;

  answer = winner(pobi, crong);

  return answer;
}

// 게임 결과를 리턴하는 함수
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

// 제한사항 위반을 검사하는 함수
function violationChk(player1, player2) {
  // 각 배열의 크기가 2인지 확인
  var lenChk1 = player1.length == 2 ? true : false;
  var lenChk2 = player2.length == 2 ? true : false;

  // 왼쪽 페이지 번호가 홀수이고, 페이지 번호가 순서대로 들어있는지 확인
  var pageChk1 =
    player1[0] % 2 == 1 && player1[0] + 1 == player1[1] ? true : false;
  var pageChk2 =
    player2[0] % 2 == 1 && player2[0] + 1 == player2[1] ? true : false;

  // 모든 결과가 true 일 때만 true 리턴
  return lenChk1 && lenChk2 && pageChk1 && pageChk2;
}

module.exports = problem1;
