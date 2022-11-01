const checkValidPage = (page) => {
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

const calculateAddSum = (array) => array.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);

const calculateMultiplySum = (array) => array.reduce((acc, curr) => parseInt(acc) * parseInt(curr), 1);

const calculateScore = (array) => {
  const [left, right] = array;
  const leftPageArray = left.toString().split("");
  const rightPageArray = right.toString().split("");

  return Math.max(calculateAddSum(leftPageArray), calculateAddSum(rightPageArray), calculateMultiplySum(leftPageArray), calculateMultiplySum(rightPageArray));
};

function problem1(pobi, crong) {
  let answer;

  if (checkValidPage(pobi) && checkValidPage(crong)) {
    const pobiScore = calculateScore(pobi);
    const crongScore = calculateScore(crong);

    if (pobiScore === crongScore) answer = 0;
    else if (pobiScore > crongScore) answer = 1;
    else if (crongScore > pobiScore) answer = 2;

    return answer;
  } else answer = -1;

  return answer;
}

module.exports = problem1;
