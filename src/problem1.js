function problem1(pobi, crong) {
  let answer;
  // 예외사항
  if (checkingExceptions(pobi) === -1 || checkingExceptions(crong) === -1) {
    return -1;
  }
  //  최대숫자
  let pobiMaxNum = getCrewMaxNum(getCrewMaxNum(multiPageNum(pobi[0]), sumPageNum(pobi[0])), getCrewMaxNum(multiPageNum(pobi[1]), sumPageNum(pobi[1])));
  let crongMaxNum = getCrewMaxNum(getCrewMaxNum(multiPageNum(crong[0]), sumPageNum(crong[0])), getCrewMaxNum(multiPageNum(crong[1]), sumPageNum(crong[1])));
  //승자구하기
  if (pobiMaxNum > crongMaxNum) {
    answer = 1;
  } else if (pobiMaxNum < crongMaxNum) {
    answer = 2;
  } else {
    answer = 0;
  }
  return answer;
}

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
