// 기능 목록
// 1. 예외 사항 처리 하기
// 2. pobi의 가장 큰 수 구하기
// 3. crong의 가장 큰 수 구하기
// 4. 승패 결과 처리하기

function problem1(pobi, crong) {
  // 예외 사항 처리하기
  // 1. 포비나 크롱 배열이 1, 2, 399, 400의 값을 가지고 있을 때
  const concatArr = pobi.concat(crong);
  if (concatArr.filter((el) => el <= 2 || el >= 399).length > 0) return -1;
  // 2. 각 배열의 값의 차이가 1 초과일때 ex) [99, 102]
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) return -1;
}

module.exports = problem1;
