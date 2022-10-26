const MIN_PAGE = 1;
const MAX_PAGE = 400;

const maxScore = (page) => {
  let sumScore = 0;
  let multipScore = 1;

  do {
    sumScore += page % 10;
    multipScore *= page % 10;
    page = parseInt(page / 10);
  } while (page > 0);

  return sumScore > multipScore ? sumScore : multipScore;
};

const possiblePages = (pages) => {
  const [left, right] = pages;

  if (Math.abs(left - right) !== 1) return false;
  if (left === MIN_PAGE) return false;
  if (right === MAX_PAGE) return false;
  return true;
};

function problem1(pobi, crong) {
  if (!possiblePages(pobi) || !possiblePages(crong)) {
    return -1;
  }

  let answer;
  const pobiScore = Math.max(maxScore(pobi[0]), maxScore(pobi[1]));
  const crongScore = Math.max(maxScore(crong[0]), maxScore(crong[1]));

  if (pobiScore > crongScore) answer = 1;
  if (pobiScore < crongScore) answer = 2;
  if (pobiScore === crongScore) answer = 0;

  return answer;
}

module.exports = problem1;
