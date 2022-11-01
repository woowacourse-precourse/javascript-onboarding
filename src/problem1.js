const isPage = (arr) => {
  if (arr.length !== 2) return false;
  if (arr[0] + 1 !== arr[1]) return false;
  if (arr[0] % 2 === 0) return false;
  if (arr[0] <= 1) return false;
  if (arr[1] >= 400) return false;
  return true;
}

const calculateSum = (page) => {
  return page.toString().split('').reduce((a, b) => a + Number(b), 0);
};

const calculateMultiplication = (page) => {
  return page.toString().split('').reduce((a, b) => a * Number(b), 1);
};

function problem1(pobi, crong) {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  const pobiMaxScore = Math.max(
    calculateSum(pobiLeftPage),
    calculateSum(pobiRightPage),
    calculateMultiplication(pobiLeftPage),
    calculateMultiplication(pobiRightPage)
  );

  const crongMaxScore = Math.max(
    calculateSum(crongLeftPage),
    calculateSum(crongRightPage),
    calculateMultiplication(crongLeftPage),
    calculateMultiplication(crongRightPage)
  );

  if (!isPage(pobi) || !isPage(crong)) return -1;
  else {
    if (pobiMaxScore > crongMaxScore) return 1;
    else if (pobiMaxScore < crongMaxScore) return 2;
    else return 0;
  }
}

module.exports = problem1;