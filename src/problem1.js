const RESULT_STATUS = {
  EXCEPTION: -1,
  DRAW: 0,
  POBI_WIN: 1,
  CRONG_WIN: 2,
};
const splitNumber = (number = 0) => {
  return `${number}`.split('').map(Number);
};
const addNumbers = (numbers = []) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};
const multiplyNumbers = (numbers = []) => {
  return numbers.reduce((acc, cur) => acc * cur, 1);
};
const compareNumbers = (...number) => {
  return Math.max(...number);
};

function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  if (pobiLeft + 1 !== pobiRight || crongLeft + 1 !== crongRight) {
    return RESULT_STATUS.EXCEPTION;
  }

  //TODO 모두 계산하지 않아도 되는 방안
  const splitPobiLeft = splitNumber(pobiLeft);
  const splitPobiRight = splitNumber(pobiRight);
  const splitCrongLeft = splitNumber(crongLeft);
  const splitCrongRight = splitNumber(crongRight);

  const addPobiRight = addNumbers(splitPobiRight);
  const addCrongRight = addNumbers(splitCrongRight);

  const multiplyPobiLeft = multiplyNumbers(splitPobiLeft);
  const multiplyPobiRight = multiplyNumbers(splitPobiRight);
  const multiplyCrongLeft = multiplyNumbers(splitCrongLeft);
  const multiplyCrongRight = multiplyNumbers(splitCrongRight);

  const maxPobi = compareNumbers(
    addPobiRight,
    multiplyPobiLeft,
    multiplyPobiRight
  );
  const maxCrong = compareNumbers(
    addCrongRight,
    multiplyCrongLeft,
    multiplyCrongRight
  );

  if (maxPobi > maxCrong) {
    return RESULT_STATUS.POBI_WIN;
  } else if (maxPobi < maxCrong) {
    return RESULT_STATUS.CRONG_WIN;
  } else {
    return RESULT_STATUS.DRAW;
  }
}

module.exports = problem1;
