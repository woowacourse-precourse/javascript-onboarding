const POBI_WIN = 1;
const CRONG_WIN = 2;
const NOBODY_WIN = 0;
const ERROR = -1;

// 입력값 에러 체크
const checkInputError = ([left, right]) => {
  if (left % 2 === 0) return true;
  if (right % 2 === 1) return true;
  return right - left !== 1;
};

// 페이지 별로 큰값 생성
// - 페이지 더하기

// - 페이지 곱하기
// 포비와 크롱 큰값 생성
// 포비와 크롱 값 비교

exports.checkInputError = checkInputError;
