// 기능 목록
// 1. 예외사항인지 확인하는 함수 구현후, try, catch 사용하여 함수종료 -1 반환
// 1. 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 최댓값 반환 함수 구현
// 2. map메소드로 각 페이지 최댓값이 담긴 길이2 배열 생성
// 3. 길이가 2인 숫자 배열을 받고 큰수(본인 점수)를 반환하는 함수 구현
// 3. 두 사람의 점수를 비교하여 알맞는 반환값 지정하기

// 예외 사항 체크 함수
function isException(pobi, crong) {
  // 정수형인지 확인 및 연속된 숫자인지 확인
  const intPobi = pobi.filter((pobi_ele) => Number.isInteger(pobi_ele));
  const intcrong = crong.filter((crong_ele) => Number.isInteger(crong_ele));
  const pobi_diff = intPobi[1] - intPobi[0];
  const crong_diff = intcrong[1] - intcrong[0];

  // 조건 만족하면 예외사항으로 간주 true 반환
  if (
    pobi_diff !== 0 ||
    crong_diff !== 0 ||
    intPobi.length !== 2 ||
    intcrong.length !== 2
  ) {
    return true;
  }
}

function problem1(pobi, crong) {
  var answer;

  try {
    // 예외 사항 확인후 true이면 Error 날리기
    if (isException(pobi, crong)) {
      throw new Error("예외사항");
    }
  } catch (error) {
    // try문에서의 오류로 예외사항인 경우 answer = -1;
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
