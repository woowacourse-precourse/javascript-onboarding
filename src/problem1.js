/*
 * 기능 분석
 * [x] pobi와 crong이 펼친 페이지에 대한 더 큰 값 계산 기능 
 * [x] pobi와 crong이 펼친 페이지 중 계산 값이 가장 큰 값 반환 기능
 * [x] 입력된 값이 연속된 페이지가 아닌 경우 -1을 반환 기능
 * [] pobi와 crong의 점수 비교 후 결과에 대한 결과 반환 기능
 */

// 입력 받은 한 페이지에 대한 덧셈값과 곱셈값을 비교하여 큰 값 계산 기능
const calcPageLargerValue = (page) => {

  /*
   * 입력받은 page는 number
   * js 메서드 reduce로 간단하게 작성하기 위해 String 변환 후 reduce 사용
   * 페이지 각 자릿수에 대한 곱셈값과 덧셈값을 계산하여 더 큰 값을 반환한다.
   */
  let sumPage = String(page).split("").reduce((prev, curr) => prev + parseInt(curr), 0);
  let multiPage = String(page).split("").reduce((prev, curr) => prev * parseInt(curr));

  return Math.max(sumPage, multiPage);
}

// 사용자가 펼친 왼쪽, 오른쪽 페이지에 대한 최댓값 계산 기능
function getUserMaxScore(user) {

  /*
   * user가 펼친 페이지 왼쪽과 오른쪽을 따로 계산하고
   * 더 큰 값을 반환해야한다. calcPageLagerValue 함수에 각 페이지를 넘겨주고
   * 반환값을 비교하여 더 큰 값을 반환하는데 이 값이 user의 최종 점수이다.
   */
  return Math.max(
    calcPageLargerValue(user[0]),
    calcPageLargerValue(user[1])
  )
}

// 연속된 페이지인지를 확인하는 예외 처리 기능
const isValidatePage = (user) => user[0]+1 != user[1];

function problem1(pobi, crong) {
  var answer = -1;
  let pobiScore = 0;
  let crongScore = 0;

  // 입력값이 연속된 페이지가 들어오지 않은 경우 -1을 반환
  if (isValidatePage(pobi) || isValidatePage(crong)) return answer;

  pobiScore = getUserMaxScore(pobi);
  crongScore = getUserMaxScore(crong);

  return answer;
}

module.exports = problem1;
