const calcMaxValue = (page) => {
  const numbersArray = String(page).split("");
  const sum = numbersArray.reduce((acc, cur) => acc + Number(cur), 0);
  const multiple = numbersArray.reduce((acc, cur) => acc * Number(cur));

  return Math.max(sum, multiple);
};

const getScore = (pages) => {
  const [leftPage, rightPage] = pages;
  const leftPageValue = calcMaxValue(leftPage);
  const rightPageValue = calcMaxValue(rightPage);
  return Math.max(leftPageValue, rightPageValue);
};

function problem1(pobi, crong) {
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;
}

module.exports = problem1;
