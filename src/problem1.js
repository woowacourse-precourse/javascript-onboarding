function problem1(pobi, crong) {
  if (errorCheck(pobi)) return -1;
  if (errorCheck(crong)) return -1;

  const pobiScore = getMaxNum(pobi);
  const crongScore = getMaxNum(crong);
  const result = compareTwoScores(pobiScore, crongScore);

  return result;
}

function errorCheck(pages) {
  if (pages[0] - pages[1] !== 1) return true;
  if (pages[1] > 400) return true;
  if (pages[0] < 1) return true;
}
function getMaxNum(person) {
  if (!(person[1] - person[0] === 1)) return true;

  const pages = [person[0], person[1], crong[0], crong[1]];
  pages.forEach((page) => {
    if (page < 1) return -1;
  });
  let max = Number.MIN_SAFE_INTEGER;

  pages.forEach((page) => {
    let sum = 0;
    let mlp = 1;
    page
      .toString()
      .split("")
      .forEach((char) => {
        sum += Number(char);
        mlp *= Number(char);
        max = max > Math.max(sum, mlp) ? max : Math.max(sum, mlp);
      });
  });

  return max;
}
function compareTwoScores(pobiScore, crongScore) {
  return pobiScore === crongScore ? 0 : pobiScore > crongScore ? 1 : 2;
}

module.exports = problem1;
