/*
[x] 페이지가 올바른 페이지인지 확인하는 기능을 구현한다.
[x] 페이지가 첫 페이지인지 확인하는 기능을 구현한다.
[x] 페이지가 마지막 페이지인지 확인하는 기능을 구현한다.
[x] 페이지 각 자리를 더하는 기능을 구현한다.
[x] 페이지 각 자리를 곱하는 기능을 구현한다.
[x] 유저의 점수를 구하는 기능을 구현한다.
[x] 포비나 크롱의 페이지가 올바르지 않은 페이지면 -1을 반환한다.
[x] 포비나 크롱의 페이지가 첫 페이지면 -1을 반환한다.
[x] 포비나 크롱의 페이지가 마지막 페이지면 -1을 반환한다.
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

function isFirstPage(page) {
  const [left, right] = page;
  if (left === 1 && right === 2) {
    return true;
  }
  return false;
}

function isLastPage(page) {
  const [left, right] = page;
  if (left === 399 && right === 400) {
    return true;
  }
  return false;
}

function sumEachPageNumbers(page) {
  let total = 0;
  for (const eachPage of page) {
    for (const eachDigitString of String(eachPage)) {
      total += parseInt(eachDigitString, 10);
    }
  }
  return total;
}

function multiplyEachPageNumbers(page) {
  let total = 1;
  for (const eachPage of page) {
    for (const eachDigitString of String(eachPage)) {
      total *= parseInt(eachDigitString, 10);
    }
  }
  return total;
}

function calculateScore(page) {
  return Math.max(sumEachPageNumbers(page), multiplyEachPageNumbers(page));
}

function problem1(pobi, crong) {
  if (
    !isValidPage(pobi) ||
    !isValidPage(crong) ||
    isFirstPage(pobi) ||
    isFirstPage(crong) ||
    isLastPage(pobi) ||
    isLastPage(crong)
  ) {
    return -1;
  }
}

module.exports = problem1;
