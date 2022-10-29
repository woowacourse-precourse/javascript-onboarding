// 기능 목록
// 1. 예외사항인지 확인하는 함수 구현후, try, catch 사용하여 함수종료 -1 반환
// 1. 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 최댓값 반환 함수 구현
// 2. map메소드로 각 페이지 최댓값이 담긴 길이2 배열 생성
// 3. 길이가 2인 숫자 배열을 받고 큰수(본인 점수)를 반환하는 함수 구현
// 3. 두 사람의 점수를 비교하여 알맞는 반환값 지정하기

// 예외 사항 체크 함수
function isException(player) {
  // 정수형인지 확인 및 연속된 숫자인지 확인
  const intPlayer = player.filter((player_ele) => Number.isInteger(player_ele));
  const player_diff = intPlayer[1] - intPlayer[0];
  const isInit = intPlayer[0] === 0 && intPlayer[0] === 1;
  const isLast = intPlayer[0] === 399 && intPlayer[1] === 400;

  // 조건 만족하면 예외사항으로 간주 true 반환
  if (player_diff !== 1 || intPlayer.length !== 2 || isInit || isLast) {
    return true;
  }
}

// 2개의 숫자로 부터 최대 계산값 반환 함수
function getMaxValue() {}

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

console.log(problem1([97, 98], [197, 198]));
