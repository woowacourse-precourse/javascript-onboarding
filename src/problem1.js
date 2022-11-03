function problem1(pobi, crong) {
  //기능목록 1-1, 1-2, 1-3 구현
  const isWrong = () => {
    return (
      pobi[0] % 2 !== 1 ||
      pobi[1] % 2 !== 0 ||
      pobi[0] === 1 ||
      pobi[1] === 400 ||
      pobi[1] - pobi[0] !== 1 ||
      crong[0] % 2 !== 1 ||
      crong[1] % 2 !== 0 ||
      crong[0] === 1 ||
      crong[1] === 400 ||
      crong[1] - crong[0] !== 1
    );
  };

  //예외처리
  if (isWrong()) return -1;

  //기능목록 2-1,2-2 구현
  const makeNum = num => {
    let sum = 0;
    let times = 1;
    while (num) {
      sum += num % 10;
      times *= num % 10;
      num = parseInt(num / 10);
    }
    return Math.max(sum, times);
  };

  //연산
  //기능목록 2-3 구현
  const pScore = Math.max(...pobi.map(page => makeNum(page)));
  const cScore = Math.max(...crong.map(page => makeNum(page)));

  //출력값 구하기
  let answer;
  //기능목록 3-1 구현
  if (pScore > cScore) {
    answer = 1;
  } else if (pScore < cScore) {
    answer = 2;
  } else {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
