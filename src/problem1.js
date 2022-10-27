function problem1(pobi, crong) {
  var answer;

  // 예외 확인
  const check = (left, right) => {
    // 입력 페이지가 정상이면 1, 비정상이면 -1
    return (left + 1) == right ? 1 : -1;
  }

  let p = check(pobi[0], pobi[1]);
  let c = check(crong[0], crong[1]);

  return answer;
}

module.exports = problem1;
