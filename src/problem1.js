/*
1. 제약사항 검사
  - 숫자가 1~400 범위
  - 왼쪽 홀, 오른쪽 짝
  - 왼쪽+1=오른쪽
  - '시작 면' 과 '마지막 면'의 정의?
      >> 일단 [표지뒷면, 1페이지뒷면]이 시작면이라 생각하고 풀이
2. 점수 계산: 문자열로 바꾼 후 parseInt
*/

function problem1(pobi, crong) {
  let answer;

  if (is_valid(pobi) && is_valid(crong))
  {
    let pobi_score = Math.max(calculate_score(pobi[0]), calculate_score(pobi[1]));
    let crong_score = Math.max(calculate_score(crong[0]), calculate_score(crong[1]));
    
    if (pobi_score > crong_score)
      answer = 1;
    else if (pobi_score < crong_score)
      answer = 2;
    else
      answer = 0;
  }
  else
  {
    answer = -1;
  }

  return answer;
}

function is_valid(pages)
{
  if (pages[0] % 2 == 1 &&
      pages[0] + 1 == pages[1] &&
      1 <= pages[0] && pages[0] <= 399)
  {
    return true;
  }
  return false;
}

function calculate_score(page)
{
  page = String(page).split('').map(Number);
  let sum_score = page.reduce((prev, cur) => prev + cur, 0);
  let mult_score = page.reduce((prev, cur) => prev * cur, 1);
  return Math.max(sum_score, mult_score);  
}

module.exports = problem1;
