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
function exception(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage % 2 === 0 || rightPage % 2 === 1) return false;
  if (leftPage <= 1 || rightPage >= 400) return false;
  if (rightPage - leftPage !== 1) return false;
  return true;
}
function problem1(pobi, crong) {
  if (!exception(pobi) || !exception(crong)) return -1;
  const pobiMaxScore = getMaxScore(pobi);
  const crongMaxScore = getMaxScore(crong);
  if (pobiMaxScore > crongMaxScore) return 1;
  if (pobiMaxScore < crongMaxScore) return 2;
  if (pobiMaxScore === crongMaxScore) return 0;
}

module.exports = problem1;
