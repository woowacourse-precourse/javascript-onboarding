// 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구하는 함수
function getMaxPageNum(page) {
  let sum = 0, 
      multi = 1,
      mod;

  for (let page_num = page; page_num > 0; page_num = parseInt(page_num / 10)) {
    mod = page_num % 10;
    sum += mod;
    multi *= mod;
  }
  return Math.max(sum, multi);
}

// 왼쪽 페이지 번호의 결과와 오른쪽 페이지 번호의 결과 중 큰 수를 구하는 함수
function getUserScore(pages) {
  return Math.max(getMaxPageNum(pages[0]), getMaxPageNum(pages[1]));
}

// 포비와 크롱의 점수를 비교해 더 큰 사람을 구하는 함수
function getWinner(pobi, crong) {
  const pobi_score = getUserScore(pobi),
        crong_score = getUserScore(crong);

  if (pobi_score > crong_score) return 1;
  if (pobi_score < crong_score) return 2;
  if (pobi_score === crong_score) return 0;
}

// 왼쪽 페이지와 오른쪽 페이지가 연속되는지 확인하는 함수
function isContinuousPage(pages){
  return Math.abs(pages[0] - pages[1]) === 1;
}

// 시작 면이나 마지막 면인지 판별하는 기능
function isNotStartOrEnd(pages) {
  return (pages[0] !== 1) && (pages[1] !== 400);
}

// 포비와 크롱의 페이지가 둘 다 정상적인지 확인하는 함수
function isCorrectBoth(pobi, crong) {
  return isNotStartOrEnd(pobi) && isNotStartOrEnd(crong) 
          && isContinuousPage(pobi) && isContinuousPage(crong);
}

function problem1(pobi, crong) {
  if (!isCorrectBoth(pobi, crong)) return -1;
  return getWinner(pobi, crong);
}

module.exports = problem1;
