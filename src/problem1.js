function problem1(pobi, crong) {
  if (isNotValidPages(pobi) || isNotValidPages(crong)) return -1;

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  if (pobiScore === crongScore) return 0;
  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
}

function isNotValidPages([leftPage, rightPage]) {
  if ((leftPage < 1) || (rightPage > 400) || (leftPage + 1 !== rightPage)) {
    return true;
  }

  return false;
}

function getScore(pages) {
  const [leftPageSum, righPageSum] = pages.map((page) => 
    String(page).split('').reduce((acc, cur) => Number(acc) + Number(cur), 0)
  );
  const [leftPageProduct, rightPageProduct] = pages.map((page) => 
    String(page).split('').reduce((acc, cur) => Number(acc) * Number(cur), 1)
  );

  return Math.max(leftPageSum, righPageSum, leftPageProduct, rightPageProduct);
}

module.exports = problem1;
