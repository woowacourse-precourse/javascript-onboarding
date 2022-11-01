const devidePageNumber = (page) => {
  const pageNumberArray = page.toString().split("").map(Number);
  return pageNumberArray;
};

const sumPageNumber = (page) => {
  const sum = page.reduce((sumValue, currentValue) => {
    return sumValue + currentValue;
  });
  return sum;
};

const multiPageNumber = (page) => {
  const multi = page.reduce((multiValue, currentValue) => {
    return multiValue * currentValue;
  });
  return multi;
};

const comparePageNumber = (page1, page2) => {
  const maxPageValue = Math.max(
    sumPageNumber(page1),
    multiPageNumber(page1),
    sumPageNumber(page2),
    multiPageNumber(page2)
  );
  return maxPageValue;
};

const compareWinner = (pobi, crong) => {
  let winner;
  if (pobi === crong) {
    winner = 0;
  } else if (pobi > crong) {
    winner = 1;
  } else if (pobi < crong) {
    winner = 2;
  }
  return winner;
};

function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;
  let answer;

  const arrPobiLeft = devidePageNumber(pobiLeft);
  const arrPobiright = devidePageNumber(pobiRight);
  const arrCrongLeft = devidePageNumber(crongLeft);
  const arrCrongright = devidePageNumber(crongRight);

  if (pobiLeft + 1 === pobiRight && crongLeft + 1 === crongRight) {
    const maxPobi = comparePageNumber(arrPobiLeft, arrPobiright);
    const maxCrong = comparePageNumber(arrCrongLeft, arrCrongright);
    answer = compareWinner(maxPobi, maxCrong);
  } else {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
