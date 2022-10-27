function problem1(pobi, crong) {
  let answer;

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
