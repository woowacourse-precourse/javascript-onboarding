function problem1(pobi, crong) {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  const getSum = (page) => {
    return page.toString().split('').reduce((a, b) => a + Number(b), 0);
  };

  const getMultiplication = (page) => {
    return page.toString().split('').reduce((a, b) => a * Number(b), 1);
  };

  const pobiMaxScore = Math.max(
    getSum(pobiLeftPage),
    getSum(pobiRightPage),
    getMultiplication(pobiLeftPage),
    getMultiplication(pobiRightPage)
  );

  const crongMaxScore = Math.max(
    getSum(crongLeftPage),
    getSum(crongRightPage),
    getMultiplication(crongLeftPage),
    getMultiplication(crongRightPage)
  );

  const check = (arr) => {
    if (arr.length !== 2) return false;
    if (arr[0] + 1 !== arr[1]) return false;
    if (arr[0] % 2 === 0) return false;
    if (arr[0] <= 1) return false;
    if (arr[1] >= 400) return false;
    return true;
  }
  if (!check(pobi) || !check(crong)) return -1;
  else {
    if (pobiMaxScore > crongMaxScore) return 1;
    else if (pobiMaxScore < crongMaxScore) return 2;
    else return 0;
  }
}

module.exports = problem1;
