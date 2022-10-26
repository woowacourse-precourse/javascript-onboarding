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
  if (Math.abs(right - left) > 1) {
    return false;
  }
  return true;
}

function problem1(pobi, crong) {
  var answer;
  if (!isValid(pobi) || !isValid(crong)) {
    return -1;
  }
  return answer;
}

module.exports = problem1;
