function problem1(pobi, crong) {
  var answer;
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  const isValidPobiPage = isValidPage(pobiLeft, pobiRight);
  const isValidCrongPage = isValidPage(crongLeft, crongRight);

  if (!isValidCrongPage || !isValidPobiPage) {
    return (answer = -1);
  }

  const [pobiNumber, crongNumber] = comparePages(
    [pobiLeft, pobiRight],
    [crongLeft, crongRight]
  );

  if (pobiNumber === crongNumber) {
    answer = 0;
  } else if (pobiNumber > crongNumber) {
    answer = 1;
  } else if (pobiNumber < crongNumber) {
    answer = 2;
  }

  return answer;
}

function comparePages(pobiPages, crongPages) {
  const [pobiLeft, pobiRight] = pobiPages;
  const [crongLeft, crongRight] = crongPages;

  const pobiNumber = Math.max(biggerNumber(pobiLeft), biggerNumber(pobiRight));
  const crongNumber = Math.max(
    biggerNumber(crongLeft),
    biggerNumber(crongRight)
  );

  return [pobiNumber, crongNumber];
}

function biggerNumber(page) {
  const splitPageNumber = String(page).split('');
  const sum = sumSplitPageNumber(splitPageNumber);
  const multiple = multipleSplitPageNumber(splitPageNumber);

  return Math.max(sum, multiple);
}

function sumSplitPageNumber(splitPageNumber) {
  let sumPageNumber = splitPageNumber.map(Number).reduce((prev, curr) => {
    return prev + curr;
  });

  return sumPageNumber;
}
function multipleSplitPageNumber(splitPageNumber) {
  let multiplePageNumber = 1;
  splitPageNumber.forEach((splitNumber) => {
    multiplePageNumber *= splitNumber;
  });

  return multiplePageNumber;
}

function isValidPage(leftPageNumber, rightPageNumber) {
  if (leftPageNumber >= 400) {
    return false;
  }
  if (rightPageNumber <= 1 || leftPageNumber <= 1) {
    return false;
  }
  if (rightPageNumber - leftPageNumber !== 1) {
    return false;
  }
  if (leftPageNumber % 2 === 0) {
    return false;
  }
  if (rightPageNumber % 2 === 1) {
    return false;
  }
  return true;
}

module.exports = problem1;
