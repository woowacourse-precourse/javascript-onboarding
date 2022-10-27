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
  if (inputArr.indexOf(1) === -1 || inputArr.indexOf(400) === -1) {
    return true;
  }
  return false;
}

module.exports = problem1;
