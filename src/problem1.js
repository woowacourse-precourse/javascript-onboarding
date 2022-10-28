function problem1(pobi, crong) {
  let answer;
  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return (answer = -1);
  }
  answer = getWinner([pobi, crong]);
  return answer;
}
const isValidPages = (pages) => {
  const [leftPage, rightPage] = pages;
  const [firstPage, lastPage] = [1, 400];

  if (rightPage - leftPage != 1) return false;
  if (leftPage <= firstPage || rightPage >= lastPage) return false;
  return true;
};
const getDigitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((prev, cur) => prev + Number(cur), 0);
};
const getDigitProduct = (num) => {
  return num
    .toString()
    .split("")
    .reduce((prev, cur) => prev * Number(cur), 1);
};
const getMaxScore = ([leftPage, rightPage]) => {
  return Math.max(
    getDigitSum(leftPage),
    getDigitSum(rightPage),
    getDigitProduct(leftPage),
    getDigitProduct(rightPage)
  );
};
const getWinner = ([player1, player2]) => {
  if (getMaxScore(player1) > getMaxScore(player2)) return 1;
  if (getMaxScore(player1) < getMaxScore(player2)) return 2;
  return 0;
};

module.exports = problem1;
