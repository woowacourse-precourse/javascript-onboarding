function problem1(pobi, crong) {
  const EXCEPTION = -1;
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const DRAW = 0;

  if (isException(pobi) || isException(crong)) return EXCEPTION;

  let pobiScore = Math.max(pageScore(pobi[0]), pageScore(pobi[1]));
  let crongScore = Math.max(pageScore(crong[0]), pageScore(crong[1]));

  if (pobiScore > crongScore) return POBI_WIN;
  else if (pobiScore < crongScore) return CRONG_WIN;
  else return DRAW;
}

function pageScore(page) {
  let scoreArr = page
    .toString()
    .split('')
    .reduce(
      (acc, cur) => {
        acc[0] += Number(cur);
        acc[1] *= Number(cur);
        return acc;
      },
      [0, 1]
    );

  return Math.max(scoreArr[0], scoreArr[1]);
}

function isException(pages) {
  if (pages[0] <= 1 || pages[1] >= 400) return true;
  else if (pages[1] - pages[0] !== 1) return true;
  else return false;
}

module.exports = problem1;
