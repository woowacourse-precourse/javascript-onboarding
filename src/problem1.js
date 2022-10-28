// 페이지 번호가 연속적인지 확인하는 기능
function isPageContinuous(pages) {
  if (pages[1] - pages[0] === 1) {
    return true;
  }
  return false;
}

function problem1(pobi, crong) {
  var answer;
  if (!isPageContinuous(pobi) || !isPageContinuous(crong)) {
    return -1;
  }
  return answer;
}

module.exports = problem1;
