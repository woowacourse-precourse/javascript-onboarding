function problem1(pobi, crong) {
  let answer;

  //예외처리
  //기능목록 1-1 구현
  if (
    pobi[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    crong[0] % 2 !== 1 ||
    crong[1] % 2 !== 0
  )
    return -1;
  //기능목록 1-2 구현
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  //연산
  let pScore = 0;
  let cScore = 0;

  //기능목록 2-1,2-2 구현
  const makeNum = (num) => {
    let sum = 0;
    let times = 1;
    while (num) {
      sum += num % 10;
      times *= num % 10;
      num = parseInt(num / 10);
    }
    return Math.max(sum, times);
  };

  //기능목록 2-3 구현
  for (let i = 0; i < 2; i++) {
    pScore = Math.max(pScore, makeNum(pobi[i]));
    cScore = Math.max(cScore, makeNum(crong[i]));
  }

  //출력값 구하기
  //기능목록 3-1 구현
  if (pScore > cScore) answer = 1;
  else if (pScore < cScore) answer = 2;
  else answer = 0;

  return answer;
}

module.exports = problem1;
