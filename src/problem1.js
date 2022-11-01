function problem1(pobi, crong) {
  // 1. 예외사항 체크 (페이지가 연속적이지 않음)
  // 2. 포비의 4가지 경우 체크 (왼쪽 각 자리 덧셈 / 왼쪽 각 자리 곱셈 / 오른쪽 각 자리 덧셈 / 오른쪽 각 자리 곱셈)
  // 3. 가장 큰 숫자를 포비의 점수로 저장
  // 4. 크롱의 4가지 경우 체크 (왼쪽 각 자리 덧셈 / 왼쪽 각 자리 곱셈 / 오른쪽 각 자리 덧셈 / 오른쪽 각 자리 곱셈)
  // 5. 가장 큰 숫자를 크롱의 점수로 저장
  // 6. 두 숫자를 비교하여 값 출력

  let answer;

  // 예외 처리
  const Exception = (num1, num2) => {
    return num1 + 1 === num2 ? true : false;
  };

  if (!Exception(pobi[0], pobi[1]) || !Exception(crong[0], crong[1])) return -1;

  return answer;
}

module.exports = problem1;
