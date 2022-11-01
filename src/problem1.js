// 예외사항 검사
function isCorrectPage(pages) {
  // 포비와 크롱의 길이가 2인지 검사
  if (pages.length !== 2) return false;

  // 왼쪽 페이지와 오른쪽 페이지가 연속되는지 검사
  if (pages[1] - pages[0] !== 1) return false;

  // 페이지가 연속되는지 검사
  for (let page of pages) {
    if (page <= 1 || page >= 400) return false;
  }

  return true;
}

// 페이지의 각 자릿수를 더한값과 곱한값중 큰 수를 반환하는 함수
function getMaxScore(page) {
  let sum = 0;
  let mul = 1;

  while (page > 0) {
    sum += page % 10;
    mul *= page % 10;
    page = Math.floor(page / 10);
  }

  return Math.max(sum, mul);
}

// 왼쪽 페이지와 오른쪽 페이지 점수 중 큰 수를 반환하는 함수
function getFinalScore(pages) {
  return Math.max(getMaxScore(pages[0]), getMaxScore(pages[1]));
}

function problem1(pobi, crong) {
  if (!pobi || !crong) return -1;
  if (!(isCorrectPage(pobi) && isCorrectPage(crong))) return -1;

  const pobiScore = getFinalScore(pobi);
  const crongScore = getFinalScore(crong);
  let answer;

  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else answer = 0;

  return answer;
}

module.exports = problem1;
