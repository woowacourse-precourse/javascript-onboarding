function validateArg(arg) {
  return (
    (arg.length !== 2) ||
    (typeof arg[0] !== "number" || typeof arg[1] !== "number") ||
    (arg[1] % 2 !== 0 || arg[1] <= 3 || arg[1] >= 399) ||
    (arg[1] - arg[0] !== 1)
  ) ? false : true;
}

function sumValue(strArg) {
  let sumValue = 0;
  for (let i = 0; i < strArg.length; i++) {
    sumValue += Number(strArg[i]);
  }

  return sumValue;
}

function multiplyValue(strArg) {
  let multiplyValue = 1;
  for (let i = 0; i < strArg.length; i++) {
    multiplyValue *= Number(strArg[i]);
  }

  return multiplyValue;
}

function getStringPage(arg) {
  return arg[0].toString(), arg[1].toString();
}

function findMaxValue(arg) {
  const [leftPage, rightPage] = getStringPage(arg);
  const maxSumLeft = Math.max(sumValue(leftPage), multiplyValue(leftPage));
  const maxSumRight = Math.max(sumValue(rightPage), multiplyValue(rightPage));

  return Math.max(maxSumLeft, maxSumRight);
}

function problem1(pobi, crong) {
  if (!validateArg(pobi) || !validateArg(crong)) {
    return -1;
  }
  if (findMaxValue(pobi) > findMaxValue(crong)) {
    return 1;
  }
  if (findMaxValue(pobi) === findMaxValue(crong)) {
    return 0;
  }
  if (findMaxValue(pobi) < findMaxValue(crong)) {
    return 2;
  }

  return -1;
}

module.exports = problem1;
