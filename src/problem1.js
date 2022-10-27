function problem1(pobi, crong) {
  // 예외사항으로 -1 리턴하기
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1

  // 각 자리 숫자 모두 더하기
  const sumAllPage = (num) => {
    let res = 0;
    while (num > 0) {
      res += Math.floor(num % 10);
      num = Math.floor(num / 10);
    }
    return res;
  };
}

module.exports = problem1;
