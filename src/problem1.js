function problem1(pobi, crong) {
  let answer;

  const checkPobiValidation =
    checkIsContinuous(pobi) && checkPageIsInRange(pobi);
  const checkCrongValidation =
    checkIsContinuous(crong) && checkPageIsInRange(crong);
  if (!checkPobiValidation || !checkCrongValidation) {
    answer = -1;
    return answer;
  }

  const pobiResult = findMaxValue(pobi);
  const crongResult = findMaxValue(crong);

  answer = compareValue(pobiResult, crongResult);
  return answer;
}

function checkIsContinuous(inputArr) {
  const diff = inputArr[0] - inputArr[1];
  if (diff !== -1) {
    return false;
  }
  return true;
}

function checkPageIsInRange(inputArr) {
  if (inputArr[1] !== 1 || inputArr[0] !== 400) {
    return true;
  }
  return false;
}

function findMaxValue(inputArr) {
  const calculatedArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    const splitString = inputArr[i].toString().split("");
    const addResult = splitString.map((item) => +item).reduce((a, c) => a + c);
    const multipleResult = splitString.reduce((a, c) => a * c);
    calculatedArr.push(addResult, multipleResult);
  }
  return Math.max(...calculatedArr);
}

function compareValue(pobiResult, crongResult) {
  let answer = 0;
  if (pobiResult > crongResult) answer = 1;
  else if (pobiResult < crongResult) answer = 2;
  else if (pobiResult === crongResult) answer = 0;
  return answer;
}
module.exports = problem1;
