function isValid(pages) {
  let [left, right] = pages;
  // 왼쪽 페이지는 홀수
  if (left % 2 !== 1) {
    return false;
  }
  // 오른쪽 페이지는 짝수
  if (right % 2 !== 0) {
    return false;
  }
  // 연속된 수인지 확인
  if (Math.abs(right - left) !== 1) {
    return false;
  }
  return true;
}

function calcScore(page) {
  const numbers = page.toString().split('').map(str => parseInt(str));
  const added = numbers.reduce((acc, cur) => acc + cur, 0);
  const multiplied = numbers.reduce((acc, cur) => acc * cur, 1);
  return Math.max(added, multiplied);
}

function getScore(pages) {
  const [left, right] = pages;
  return Math.max(calcScore(left), calcScore(right));
}

function problem1(pobi, crong) {ㅌㅈ
  if (!isValid(pobi) || !isValid(crong)) {
    return EXCEPT;
  }
}

module.exports = problem1;
