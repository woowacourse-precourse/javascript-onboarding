const isValidPages = (pages) => {
  if ((pages[0] <= 1) || (pages[1] >= 400) || (pages[0] + 1 !== pages[1])) {
    return false;
  }

  return true;
};

const getScore = (pages) => {
  const [leftPageSum, righPageSum] = pages.map((page) => 
    String(page).split('').reduce((acc, cur) => Number(acc) + Number(cur), 0)
  );
  const [leftPageProduct, rightPageProduct] = pages.map((page) => 
    String(page).split('').reduce((acc, cur) => Number(acc) * Number(cur), 1)
  );

  return Math.max(leftPageSum, righPageSum, leftPageProduct, rightPageProduct);
};

function problem1(pobi, crong) {
  if (!(isValidPages(pobi) && isValidPages(crong))) {
    return -1;
  }

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  
  if (pobiScore === crongScore) {
    return 0;
  }

  if (pobiScore > crongScore) {
    return 1;
  }

  if (pobiScore < crongScore) {
    return 2;
  }
}

module.exports = problem1;
