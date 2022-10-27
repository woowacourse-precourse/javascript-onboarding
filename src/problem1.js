function problem1(pobi, crong) {
  // 예외사항으로 -1 리턴하기
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
}

module.exports = problem1;
