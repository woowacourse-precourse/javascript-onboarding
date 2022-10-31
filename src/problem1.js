function problem1(pobi, crong) {
  let answer;
  return answer;
}
// 예외사항을 판별하는 함수
const checkingExceptions = (pages) => {
  if (pages.length !== 2) return -1;
  if (pages[1] - pages[0] !== 1) return -1;
  if (
    pages.some((ele) => {
      ele <= 1 || ele >= 400;
    })
  )
    return -1;

  return 1;
};

const sumPageNum = (pages) => {
  let result = 0;
  while (parseInt(pages / 10) !== 0) {
    result += pages % 10;
    pages = parseInt(pages / 10);
  }
  result += pages;
  return result;
};

const multiPageNum = (pages) => {
  let result = 1;
  while (parseInt(pages / 10) !== 0) {
    result *= pages % 10;
    pages = parseInt(pages / 10);
  }
  result *= pages;
  return result;
};

const getCrewMaxNum = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
module.exports = problem1;
