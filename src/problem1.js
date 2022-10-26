function problem1(pobi, crong) {
  /**
   * 1. 오른쪽 페이지 - 왼쪽 페이지의 값이 1이 아닐 때 예외처리 // -1
   * 2. 2-3 과정을 통해 나오는 가장 큰 수 도출
   * 3. 비교를 통해 result 반환
   */
  let answer;
  // exception handling
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  return answer;
}

module.exports = problem1;
