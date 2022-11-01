function getMaxNumber(number) {
  number = number.toString().split("").map(Number);

  let addResult = 0;
  let multiplyResult = 1;

  number.forEach((value) => {
    addResult += value;
    multiplyResult *= value;
  });

  if (addResult > multiplyResult) {
    return addResult;
  }

  return multiplyResult;
}

function problem1(pobi, crong) {
  if (
    pobi[1] - pobi[0] === 1 &&
    crong[1] - crong[0] === 1 &&
    pobi[0] > 1 &&
    crong[1] < 400
  ) {
    const pobiLeft = getMaxNumber(pobi[0]);
    const pobiRight = getMaxNumber(pobi[1]);
    const crongLeft = getMaxNumber(crong[0]);
    const crongRight = getMaxNumber(crong[1]);

    const pobiResult = pobiLeft > pobiRight ? pobiLeft : pobiRight;
    const crongResult = crongLeft > crongRight ? crongLeft : crongRight;

    if (pobiResult > crongResult) {
      return 1;
    }

    if (pobiResult < crongResult) {
      return 2;
    }

    if (pobiResult === crongResult) {
      return 0;
    }
  } else {
    return -1;
  }
}

module.exports = problem1;
