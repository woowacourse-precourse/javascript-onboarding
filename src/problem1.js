/*
[x] 페이지가 올바른 페이지인지 확인하는 기능을 구현한다.
[ ] 페이지가 첫 페이지인지 확인하는 기능을 구현한다.
[ ] 페이지가 마지막 페이지인지 확인하는 기능을 구현한다.
[ ] 페이지 각 자리를 더하는 기능을 구현한다.
[ ] 페이지 각 자리를 곱하는 기능을 구현한다.
[ ] 유저의 점수를 구하는 기능을 구현한다.
[ ] 포비나 크롱의 페이지가 올바르지 않은 페이지면 -1을 반환한다.
[ ] 포비나 크롱의 페이지가 첫 페이지면 -1을 반환한다.
[ ] 포비나 크롱의 페이지가 마지막 페이지면 -1을 반환한다.
[ ] 포비와 크롱의 점수를 구한다.
[ ] 포비가 이긴다면 1을, 크롱이 이긴다면 2를, 무승부라면 0을 반환한다.
*/

function isValidPage(page) {
  const [left, right] = page;
  if (typeof left !== "number" || typeof right !== "number") {
    return false;
  }
  if (right <= left) {
    return false;
  }
  if (left < 0 || left > 400) {
    return false;
  }
  if (right < 0 || right > 400) {
    return false;
  }
  if (right - left !== 1) {
    return false;
  }
  return true;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
