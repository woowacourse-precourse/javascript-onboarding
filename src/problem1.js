function problem1(pobi, crong) {
  let answer;

  //예외처리
  //기능목록 1-1
  if (
    pobi[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    crong[0] % 2 !== 1 ||
    crong[1] % 2 !== 0
  )
    return -1;
  //기능목록 1-2
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  return answer;
}

module.exports = problem1;
