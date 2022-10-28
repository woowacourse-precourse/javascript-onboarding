const isValidValue = (pages) => {
  // 페이지의 범위가 1~400인지 체크
  for (let i in pages) {
    if (pages[i] < 1 || pages[i] > 400) {
      return 0;
    }
  }

  // 공차가 1인 등차수열인지 체크
  if (pages[1] - pages[0] !== 1 || pages[3] - pages[2] !== 1) {
    return 0;
  }

  // 왼쪽 페이지 홀수, 오른쪽 페이지 짝수인지 체크
  if (
    pages[0] % 2 === 0 ||
    pages[2] % 2 === 0 ||
    pages[1] % 2 ||
    pages[3] % 2
  ) {
    return 0;
  }

  return 1;
};

const getSumAllDigit = (pageNum) => {
  return [...pageNum.toString()].reduce(
    (acc, curDigit) => acc + parseInt(curDigit),
    0
  );
};

const getMulAllDigit = (pageNum) => {
  return [...pageNum.toString()].reduce(
    (acc, curDigit) => acc * parseInt(curDigit)
  );
};

const getMaxValue = (pages) => {
  const calculateNums = [];
  for (let i = 0; i < 2; i++) {
    const digitSum = getSumAllDigit(pages[i]);
    const digitMul = getMulAllDigit(pages[i]);
    calculateNums.push(digitSum);
    calculateNums.push(digitMul);
  }

  return Math.max(...calculateNums);
};

function problem1(pobi, crong) {
  let answer = 0;
  if (!isValidValue([...pobi, ...crong])) {
    return -1;
  }
  const pobiValue = getMaxValue(pobi);
  const crongValue = getMaxValue(crong);
  if (pobiValue > crongValue) {
    answer = 1;
  } else if (pobiValue < crongValue) {
    answer = 2;
  }

  return answer;
}

module.exports = problem1;
