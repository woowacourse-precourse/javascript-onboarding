// 16:56 ~
function problem1(pobi, crong) {
  if (!isPagesCorrect(pobi) || isPagesCorrect(crong)) return -1;
  let answer = 0;
  return answer;
}

function isPagesCorrect(pages) {
  // 짝수, 홀수 올바른가
  return pages[0] % 2 === 0 || pages[1] % 2 || pages[1] - pages[0] !== 1
    ? false
    : true;
}
module.exports = problem1;
