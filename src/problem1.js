// 1. 페이지별 자리수 더한 것과 곱한 것을 비교해 큰 수 구하는 함수 만들기
// 1-1. 왼쪽 페이지와 오른쪽 페이지의 차가 1보다 큰 경우, 첫페이지와 마지막 페이지가 있는 경우 예외사항으로 처리해 -1 반환하기
// 2. 포비와 크롱의 점수 비교하기

function problem1(pobi, crong) {
  const getMaxNum = ([left, right]) => {
    if (right - left > 1 || left === 1 || right === 400) {
      return -1;
    }
    const getArray = (num) =>
      num
        .toString()
        .split('')
        .map((i) => parseInt(i));

    const sum = (arr) => arr.reduce((pre, curr) => pre + curr, 0);
    const mul = (arr) => arr.reduce((pre, curr) => pre * curr);

    return Math.max(
      sum(getArray(left)),
      mul(getArray(left)),
      sum(getArray(right)),
      mul(getArray(right))
    );
  };

  if (getMaxNum(pobi) === -1 || getMaxNum(crong) === -1) {
    return -1;
  } else if (getMaxNum(pobi) === getMaxNum(crong)) {
    return 0;
  } else if (getMaxNum(pobi) > getMaxNum(crong)) {
    return 1;
  } else if (getMaxNum(pobi) < getMaxNum(crong)) {
    return 2;
  } else {
    return -1;
  }
}

module.exports = problem1;
