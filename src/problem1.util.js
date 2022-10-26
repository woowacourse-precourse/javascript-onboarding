const POBI_WIN = 1;
const CRONG_WIN = 2;
const NOBODY_WIN = 0;
const ERROR = -1;

const returnNum = {
  POBI_WIN,
  CRONG_WIN,
  NOBODY_WIN,
};
// 입력값 에러 체크
const checkInputError = ([left, right]) => {
  if (left > 400 || right > 400 || left < 0 || right < 0) return true;
  if (left % 2 === 0) return true;
  if (right % 2 === 1) return true;
  return right - left !== 1;
};

// 페이지 별로 큰값 생성
// - 페이지 더하기
const addPageNum = (num) =>
  String(num)
    .padStart(3, "0")
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
// - 페이지 곱하기
const mulPageNum = (num) =>
  String(num)
    .padStart(3, "1")
    .split("")
    .reduce((acc, cur) => acc * Number(cur), 1);

const getLargeNum = (num) => {
  const add = addPageNum(num);
  const mul = mulPageNum(num);
  return Math.max(add, mul);
};
// 포비와 크롱 큰값 생성
// 포비와 크롱 값 비교
const whoIsWin = (pobi, crong) => {
  if (pobi > crong) return POBI_WIN;
  if (pobi === crong) return NOBODY_WIN;
  return CRONG_WIN;
};

exports.checkInputError = checkInputError;
exports.addPageNum = addPageNum;
exports.mulPageNum = mulPageNum;
exports.getLargeNum = getLargeNum;
exports.whoIsWin = whoIsWin;
exports.returnNum = returnNum;
exports.ERROR = ERROR;
