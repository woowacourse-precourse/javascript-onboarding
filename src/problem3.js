function problem3(number) {
  let answer = 0;
  const game = [3, 6, 9];
  for (let i = 1; i <= number; i++) {
    const gameNum = i
      .toString()
      .split("")
      .map((e) => parseInt(e));
    gameNum.forEach((e) => {
      if (game.includes(e)) answer++;
    });
  }
  return answer;
}

module.exports = problem3;

// 기능 구현
// 1. 3,6,9가 담긴 배열 game생성, for루프를 통해 i=1부터 number까지 반복
// 2. i를 문자열로 변환 후 split해 배열로 변환
// 3. i의 원소 하나씩 돌며 game에 해당원소가 있으면 answer를 올려줌

problem3(33);
