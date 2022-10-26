/*
구현할 기능 목록
[O] 1. 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구하는 함수
[O] 2. 왼쪽 페이지 번호의 결과와 오른쪽 페이지 번호의 결과 중 큰 수를 구하는 함수
[O] 3. 포비와 크롱의 점수를 비교해 더 큰 사람을 구하는 함수
[ ] 4. 왼쪽 페이지와 오른쪽 페이지가 연속되는지 확인하는 함수
*/

// 1. 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구하는 함수
function pageMax(page_num) {
  let sum = 0, 
      multi = 1,
      mod;
  for (let num = page_num; num > 0; num = parseInt(num / 10)) {
    mod = num % 10;
    sum += mod;
    multi *= mod;
  }
  return Math.max(sum, multi);
}

// 2. 왼쪽 페이지 번호의 결과와 오른쪽 페이지 번호의 결과 중 큰 수를 구하는 함수
function pageScore(page) {
  return Math.max(pageMax(page[0]), pageMax(page[1]));
}

// 3. 포비와 크롱의 점수를 비교해 더 큰 사람을 구하는 함수
function winner(pobi, crong) {
  const pobi_score = pageScore(pobi),
      crong_score = pageScore(crong);

  // 포비가 이기면 1, 크롱이 이기면 2, 무승부면 0
  if (pobi_score > crong_score) return 1;
  if (pobi_score < crong_score) return 2;
  if (pobi_score === crong_score) return 0;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
