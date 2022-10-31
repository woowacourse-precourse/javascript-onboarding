const POBI_WIN = 1;
const CRONG_WIN = 2;
const DRAW = 0;
const ERROR = -1;

const splitNumberToArray = (number) => {
  return String(number)
    .split("")
    .map((char) => Number(char));
};

const calcSum = (numberArray) => {
  return numberArray.reduce((acc, cur) => acc + cur);
};

const calcMul = (numberArray) => {
  return numberArray.reduce((acc, cur) => acc * cur);
};

const checkException = (array) => {
  const [left, right] = array;

  // 왼쪽 페이지 < 오른쪽 페이지 (두 값의 차이가 1인지)
  if (right - left === 1) {
    if (left % 2 !== 1) return false; // 왼쪽 페이지가 홀수값이 아니라면
  } else return false; // 두 페이지 값의 차이가 1이 아니라면

  // 페이지의 값이 범위 내에 있는지 검사
  if (right >= 2 && right <= 400 && left >= 1 && left <= 399) return true;
  return false; // 범위 밖이라면
};

function problem1(pobi, crong) {
  var answer;

  if (!checkException(pobi) || !checkException(crong)) return ERROR;

  const scorePobi = Math.max(
    calcSum(splitNumberToArray(pobi[0])),
    calcSum(splitNumberToArray(pobi[1])),
    calcMul(splitNumberToArray(pobi[0])),
    calcMul(splitNumberToArray(pobi[1]))
  );

  const scoreCrong = Math.max(
    calcSum(splitNumberToArray(crong[0])),
    calcSum(splitNumberToArray(crong[1])),
    calcMul(splitNumberToArray(crong[0])),
    calcMul(splitNumberToArray(crong[1]))
  );

  answer =
    scorePobi >= scoreCrong
      ? scorePobi === scoreCrong
        ? DRAW
        : POBI_WIN
      : CRONG_WIN;
  return answer;
}

module.exports = problem1;
