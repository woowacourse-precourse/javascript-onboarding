function problem1(pobi, crong) {
  if (!isInPage(pobi) || !isInPage(crong)) {
    return -1;
  }

  const pobiMaxValue = Math.max(
    ...pobi.map((page) => calculatePageMaxValue(page))
  );
  const crongMaxValue = Math.max(
    ...crong.map((page) => calculatePageMaxValue(page))
  );

  if (pobiMaxValue > crongMaxValue) {
    return 1;
  }
  if (pobiMaxValue < crongMaxValue) {
    return 2;
  }
  if (pobiMaxValue === crongMaxValue) {
    return 0;
  }
}

function isInPage(pages) {
  const leftPage = pages[0];
  const rightPage = pages[1];

  if (rightPage - leftPage !== 1) {
    return false;
  }
  if (leftPage % 2 === 0 || rightPage % 2 === 1) {
    return false;
  }
  if (leftPage === 1 || rightPage === 400) {
    return false;
  }
  if (pages.every((page) => page < 1 || pages > 400)) {
    return false;
  }
  return true;
}

function calculatePageMaxValue(page) {
  let pageNumberToString = page.toString().split("");
  let multyply = pageNumberToString.reduce((acc, cur) => acc * Number(cur), 1);
  let plus = pageNumberToString.reduce((acc, cur) => acc + Number(cur), 0);
  return Math.max(multyply, plus);
}

module.exports = problem1;
