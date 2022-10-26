/* 
 * 기능 정의
 * 1. 왼쪽페이지, 오른쪽페이지: 각 자리 숫자의 합, 곱을 구함
 * 2. 합, 곱 중 큰 수가 왼쪽페이지의  점수, 오른쪽 페이지의 점수
 * 3. 왼쪽 점수와  오른쪽 점수를 비교하여 최종 점수 산출
 * 4. 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1 
 *  
 * 예외 사항
 * 1. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. => 범위 3~398 check
 * 2. pobi와 crong의 길이는 2이다. => length: 2 check
 * 3. pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 => 오른쪽 페이지 = 왼쪽페이지 + 1
 * 4. 왼쪽 페이지는 무조건 홀수 => 왼쪽페이지 % 2 === 1
 */

function problem1(pobi, crong) {
  var answer;
  return answer;
}

// 기능 1, 2: 숫자를 받아 각 자릿 수의 합, 곱을 구한 후, 대소 비교 후 반환
const getMaxValOnPage = (page) => {
  var sumVal = 0;
  var mulVal = 1;

  String(page).split("").map((num) => {
    sumVal += Number(num);
    mulVal *= Number(num);
  })

  return sumVal >= mulVal ? sumVal : mulVal;
}

module.exports = problem1;
