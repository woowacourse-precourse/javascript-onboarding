function problem1(pobi, crong) {
  var answer;
  return answer;
}

// 예외 처리 함수
function checkIsPageValid(pobi, crong) {
  let isValid = true;

  // 왼쪽 페이지와 오른쪽 페이지의 차이가 1이 아닌 경우
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) isValid = false;

  // 페이지의 홀수/짝수가 맞지 않는 경우
  if (
    pobi[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    crong[0] % 2 !== 1 ||
    crong[1] % 2 !== 0
  )
    isValid = false;

  // 페이지가 1 ~ 400 사이에 있지 않은 경우
  if (
    pobi.filter((v) => v > 400 || v < 1).length > 0 ||
    crong.filter((v) => v > 400 || v < 1).length > 0
  )
    isValid = false;

  return isValid;
}

module.exports = problem1;

// pobi, crong: 길이가 2인 배열
// [왼쪽 페이지 번호, 오른쪽 페이지 번호]

// 계산해야 할 값
// 왼쪽 페이지 번호 각 자리 숫자를 모두 더한 수
// 왼쪽 페이지 번호 각 자리 숫자를 모두 곱한 수
// 오른쪽 페이지 번호 각 자리 숫자를 모두 더한 수
// 오른쪽 페이지 번호 각 자리 숫자를 모두 곱한 수

// 계산 결과 중 가장 큰 값을 대표 값으로 정하고, 크기 비교
// pobi가 이기면 1, crong이 이기면 2, 무승부 0, 예외 -1

// 예외 경우
// 페이지를 펼쳤는데 왼쪽 페이지와 오른쪽 페이지 차이가 1이 아닌 경우
// 왼쪽 페이지가 짝수이거나 오른쪽 페이지가 짝수일 경우
// 페이지의 숫자가 1 ~ 400의 범위 안에 들어오지 않을 경우
