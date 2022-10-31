function isError(pages) {
  let [left, right] = pages;
  if (left <= 1 || right >= 400) return 1;
  if (left % 2 == 0) return 1;
  if (left + 1 !== right) return 1;
  return 0;
}
function maxBetweenSumAndMult(page) {
  let sum = 0;
  let mult = 1;
  while (page) {
    sum += page % 10;
    mult *= page % 10;
    page = Math.trunc(page / 10);
  }
  return Math.max(sum, mult);
}
function findMaxValue(pages) {
  let [left, right] = pages;
  const leftMax = maxBetweenSumAndMult(left);
  const rightMax = maxBetweenSumAndMult(right);
  const maxValue = Math.max(leftMax, rightMax);
  return maxValue;
}
function problem1(pobi, crong) {
  var answer = 0;
  if (isError(pobi) || isError(crong)) return -1;
  const pobiScore = findMaxValue(pobi);
  const crongScore = findMaxValue(crong);
  if (pobiScore > crongScore) answer = 1;
  if (pobiScore < crongScore) answer = 2;
  return answer;
}
module.exports = problem1;
