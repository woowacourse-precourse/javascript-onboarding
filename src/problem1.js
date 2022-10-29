// 기능 목록
// 1. 예외사항인지 확인하는 함수 구현후, try, catch 사용하여 함수종료 -1 반환
// 2. 페이지 번호의 각 자리 숫자를 모두 더하거나 곱해 최댓값 반환하는 함수 구현
// 3. map메소드로 각 페이지 최댓값이 담긴 길이2 배열 생성
// 4. 길이가 2인 숫자 배열을 받고 큰수(본인 점수)를 반환하는 함수 구현
// 5. 두 사람의 점수를 비교하여 알맞는 반환값 지정하기

// 예외 사항 체크 함수
function isException(player) {
  // 정수형인지 확인 및 연속된 숫자인지 확인
  const int_Player = player.filter((player_ele) =>
    Number.isInteger(player_ele)
  );
  const player_diff = int_Player[1] - int_Player[0];
  const isInit = int_Player[0] === 0 && int_Player[0] === 1;
  const isLast = int_Player[0] === 399 && int_Player[1] === 400;

  // 조건 만족하면 예외사항으로 간주 true 반환
  if (player_diff !== 1 || int_Player.length !== 2 || isInit || isLast) {
    return true;
  }
}

function problem1(pobi, crong) {
  var answer;

  try {
    // 예외 사항 확인후 true이면 Error 날리기
    if (isException(pobi) || isException(crong)) {
      throw new Error("예외사항");
    }
  } catch (error) {
    // try문에서의 오류로 예외사항인 경우 answer = -1;
    answer = -1;
    console.log(error);
  }
  return answer;
}

module.exports = problem1;
