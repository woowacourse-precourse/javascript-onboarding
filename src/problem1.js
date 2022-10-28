/** 기능 목록
 * 1. pobi의 왼쪽 페이지와 오른쪽 페이지의 합과 곱을 구하고 더 큰 값을 pobi의 점수로 한다.
 * 2. crong의 왼쪽 페이지와 오른쪽 페이지의 합과 곱을 구하고 더 큰 값을 crong의 점수로 한다.
 * 3. pobi의 점수와 crong의 점수를 비교하여 승패를 가린다.
 */

/** 기능 예외 목록
 * 1. 페이지 번호가 연속되지 않을 경우
 * 2. 왼쪽 페이지가 홀수가 아니고 오른쪽 페이지가 짝수가 아닌 경우
 */

function problem1(pobi, crong) {
  var answer;

  /** 예외처리 */
  // pobi, crong이 펼친 페이지 번호가 연속되지 않은 경우
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  // pobi, crong의 왼쪽 페이지가 홀수가 아니고 오른쪽 페이지가 짝수가 아닌 경우
  if (
    pobi[0] % 2 === 0 ||
    crong[0] % 2 === 0 ||
    pobi[1] % 2 !== 0 ||
    crong[1] % 2 !== 0
  ) {
    return -1;
  }

  return answer;
}

module.exports = problem1;
