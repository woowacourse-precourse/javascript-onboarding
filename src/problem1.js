/*
 * 기능 분석
 * [x] pobi와 crong이 펼친 페이지에 대한 계산 기능 
 * [] pobi와 crong이 펼친 페이지 중 계산 값이 가장 큰 값 반환 기능
 * [] 입력된 값이 연속된 페이지가 아닌 경우 -1을 반환 기능
 * [] pobi와 crong의 점수 비교 후 결과에 대한 결과 반환 기능
 */

// 입력 받은 한 페이지에 대한 덧셈값과 곱셈값을 비교하는 기능
const calcPageScore = (page) => {

  /*
   * 입력받은 page는 number
   * js 메서드 reduce로 간단하게 작성하기 위해 String 변환 후 reduce 사용
   * 페이지 각 자릿수에 대한 곱셈값과 덧셈값을 계산하여 더 큰 값을 반환한다.
   */
  let sumPage = String(page).split("").reduce((prev, curr) => prev + parseInt(curr), 0);
  let multiPage = String(page).split("").reduce((prev, curr) => prev * parseInt(curr));

  return Math.max(sumPage, multiPage);
}

function problem1(pobi, crong) {
  var answer;

  return answer;
}

module.exports = problem1;
