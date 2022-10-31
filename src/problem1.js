/**
 * Problem 1
 * 1. 예외 처리 코드 작성 -> 바로 -1 return
 *  1.1 각 입력 값의 왼쪽 페이지가 짝수일 경우
 *  1.2 각 입력 값의 오른쪽 페이지가 홀수일 경우
 *  1.3 각 페이지 번호가 연속되지 않을 경우
 *  1.4 입력 값이 1보다 작거나 400보다 클 경우
 * 2. 게임 규칙 2, 3에 따라 입력된 각 페이지(왼쪽, 오른쪽) 번호에 대해서 가장 큰 수를 구하는 함수 작성
 * 3. 함수를 통해 구한 pobi의 점수와 crong의 점수 비교
 * 4. 비교값에 따른 결과 반환
 * @param {[number, number]} pobi [왼쪽 페이지 번호, 오른쪽 페이지 번호]
 * @param {[number, number]} crong [왼쪽 페이지 번호, 오른쪽 페이지 번호]
 * @returns {-1 | 0 | 1 | 2}
 */
function problem1(pobi, crong) {
  /** 1 예외 처리 */
  if (
    pobi[0] < 1 ||
    pobi[0] > 400 ||
    pobi[1] < 1 ||
    pobi[1] > 400 ||
    crong[0] < 1 ||
    crong[0] > 400 ||
    crong[1] < 1 ||
    crong[1] > 400 ||
    pobi[0] % 2 === 0 ||
    pobi[1] % 2 === 1 ||
    crong[0] % 2 === 0 ||
    crong[1] % 2 === 1 ||
    pobi[1] - pobi[0] !== 1 ||
    crong[1] - crong[0] !== 1
  )
    return -1;
  var answer;
  return answer;
}

module.exports = problem1;
