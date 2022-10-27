const checkedValidPage = (page) => {
  const [left, right] = page;
  const isOddNum = left % 2 === 1;
  const isEvenNum = right % 2 === 0;

  if (isOddNum && isEvenNum) {
    if (1 <= left && right <= 400 && right === left + 1) {
      return true;
    }
  }
  return false;
};

function problem1(pobi, crong) {
  let answer;

  if (checkedValidPage(pobi) && checkedValidPage(crong)) {
    const pobiLeftPageArray = pobi[0].toString().split("");
    const pobiRightPageArray = pobi[1].toString().split("");

    const crongLeftPageArray = crong[0].toString().split("");
    const crongRightPageArray = crong[1].toString().split("");

    const calculateAddSum = (array) => {
      return array.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr);
      }, 0);
    };

    const calculateMultiplySum = (array) => {
      return array.reduce((acc, curr) => {
        return parseInt(acc) * parseInt(curr);
      }, 1);
    };

    const pobiLeftPageAddSumValue = calculateAddSum(pobiLeftPageArray);
    const pobiLeftPageMultiplySumValue = calculateMultiplySum(pobiLeftPageArray);
    const pobiRightPageAddSumValue = calculateAddSum(pobiRightPageArray);
    const pobiRightPageMultiplySumValue = calculateMultiplySum(pobiRightPageArray);

    const crongLeftPageAddSumValue = calculateAddSum(crongLeftPageArray);
    const crongLeftPageMultiplySumValue = calculateMultiplySum(crongLeftPageArray);
    const crongRightPageAddSumValue = calculateAddSum(crongRightPageArray);
    const crongRightPageMultiplySumValue = calculateMultiplySum(crongRightPageArray);

    const pobiScore = Math.max(pobiLeftPageAddSumValue, pobiLeftPageMultiplySumValue, pobiRightPageAddSumValue, pobiRightPageMultiplySumValue);
    const crongScore = Math.max(crongLeftPageAddSumValue, crongLeftPageMultiplySumValue, crongRightPageAddSumValue, crongRightPageMultiplySumValue);

    if (pobiScore === crongScore) answer = 0;
    else if (pobiScore > crongScore) answer = 1;
    else if (crongScore > pobiScore) answer = 2;

    return answer;
  } else answer = -1;

  return answer;
}

module.exports = problem1;
