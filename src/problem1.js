function problem1(pobi, crong) {
  // 제한사항 반영. [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  let answer;

  // 점수 계산 함수 생성
  const scoreCalculator = (score, operation) => {
    return String(score)
      .split("")
      .reduce((acc, cur) => {
        if (operation === "+") return +acc + +cur;
        if (operation === "*") return +acc * +cur;
      });
  };

  // 포비 점수
  const pobiScore = Math.max(
    scoreCalculator(pobi[0], "+"),
    scoreCalculator(pobi[0], "*"),
    scoreCalculator(pobi[1], "+"),
    scoreCalculator(pobi[1], "*")
  );

  // 크롱 점수
  const crongScore = Math.max(
    scoreCalculator(crong[0], "+"),
    scoreCalculator(crong[0], "*"),
    scoreCalculator(crong[1], "+"),
    scoreCalculator(crong[1], "*")
  );

  // 점수 비교 및 결과값 산출
  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else if (pobiScore === crongScore) answer = 0;

  return answer;
}

module.exports = problem1;
