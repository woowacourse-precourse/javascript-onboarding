/**
 * problem1
 * @param {number[]} pobi 포비가 핀 책의 양쪽 페이지
 * @param {number[]} crong 크롱이 핀 책의 양쪽 페이지
 * @returns {0 | 1 | 2 | -1}
 */
function problem1(pobi, crong) {
  if (checkVerified(pobi) && checkVerified(crong)) {
    return init(pobi, crong);
  }
  else {
    // 검사를 하나라도 통과하지 못한다면 예외처리
    return -1;
  }
}

/**
 * 페이지의 기본 조건 검사
 * @param {*} pages 누군가 핀 책의 양쪽 페이지
 * @returns {boolean} 검사에 통과한 경우 true를 반환함
 */
const checkVerified = (pages) => {
  // 6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. + 페이지 번호가 1부터 시작되는 400 페이지의 책
  if (pages[0] === 1) {
    return false;
  }
  if (pages[1] === 400) {
    return false;
  }
  // 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수 번호
  if (pages[1] % 2 !== 0) {
    return false;
  }
  if (pages[0] % 2 !== 1) {
    return false;
  }
  // 페이지는 반드시 1씩 차이가 나야 함
  if (pages[1] - pages[0] !== 1) {
    return false;
  }
  // 모든 조건을 통과했다면 true 반환
  return true;
}

/**
 * 
 * @param {number[]} pobi 포비가 핀 책의 양쪽 페이지
 * @param {number[]} crong 크롱이 핀 책의 양쪽 페이지
 * @returns {0 | 1 | 2 | -1}
 */
const init = (pobi, crong) => {
  const resultsOfPobi = pobi.map((page) => findMaxOfPageGame(page)); // 포비가 가진 페이지들의 게임 결과 값
  const resultsOfCrong = crong.map((page) => findMaxOfPageGame(page)) // 크롱이 가진 페이지들의 게임 결과 값
  const bestValueOfPobi = Math.max(...resultsOfPobi); // 포비의 베스트 숫자 찾기
  const bestValueOfCrong = Math.max(...resultsOfCrong); // 크롱의 베스트 숫자 찾기

  //  포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0
  if (bestValueOfPobi === bestValueOfCrong) {
    return 0;
  }
  if (bestValueOfPobi > bestValueOfCrong) {
    return 1;
  }
  if (bestValueOfPobi < bestValueOfCrong) {
    return 2;
  }
  return -1;
}

/**
 * 들어온 페이지 번호의 각 자리 숫자를 모두 더하거나 모두 곱한 후, 가장 큰 수를 구한다.
 * @param {number} page 계산하고 싶은 한 쪽 페이지 번호
 * @returns {number}
 */
const findMaxOfPageGame = (page) => {
  // 받은 페이지의 각 자리 숫자를 리스트로 변환해주는 작업
  const pageStringList = page.toString().split('');
  const pageNumberList = pageStringList.map((num) => parseInt(num));
  // 각 자리 숫자를 모두 더했을 때
  const addOfPage = pageNumberList.reduce((a, b) => a + b, 0);
  // 각 자리 숫자를 모두 곱했을 때
  const multipleOfPage = pageNumberList.reduce((a, b) => a * b, 1);
  // 둘 중 큰 것 하나를 반환
  return Math.max(addOfPage, multipleOfPage);
}

module.exports = problem1;
