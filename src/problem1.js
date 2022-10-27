function cal(page) {
  const pageNum = [...page.toString()].map((str) => parseInt(str));
  const add = pageNum.reduce((acc, cur) => acc + cur, 0);
  const multi = pageNum.reduce((acc, cur) => acc * cur, 1);
  return Math.max(add, multi);
}
function getMaxScore(pages) {
  const [leftPage, rightPage] = pages;
  return Math.max(cal(leftPage), cal(rightPage));
}
function problem1(pobi, crong) {
  const pobiMaxScore = getMaxScore(pobi);
  const crongMaxScore = getMaxScore(crong);
}

module.exports = problem1;
