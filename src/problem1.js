function problem1(pobi, crong) {
  const checkPobi = checkConditions(pobi);
  const checkCrong = checkConditions(crong);
  if (!checkPobi || !checkCrong) return -1;

  let pobiMaxNumber = getMaxNumber(pobi);
  let crongMaxNumber = getMaxNumber(crong);

  if (pobiMaxNumber > crongMaxNumber) {
    return 1;
  } else if (pobiMaxNumber < crongMaxNumber) {
    return 2;
  } else {
    return 0;
  }
}

function checkConditions(arr) {
  if (arr[0] === 1 || arr[1] === 400) return false;
  if (arr[0] + 1 !== arr[1]) return false;

  return true;
}
function getMaxNumber(arr) {
  let maxNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    let plusSum = arr[i]
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
    let multiplySum = arr[i]
      .toString()
      .split("")
      .reduce((acc, cur) => acc * Number(cur), 1);

    maxNumber = Math.max(maxNumber, plusSum, multiplySum);
  }

  return maxNumber;
}

module.exports = problem1;
