function problem1(pobi, crong) {
  // 1. 예외사항 체크 (페이지가 연속적이지 않음)
  // 2. 포비의 4가지 경우 체크 (왼쪽 각 자리 덧셈 / 왼쪽 각 자리 곱셈 / 오른쪽 각 자리 덧셈 / 오른쪽 각 자리 곱셈)
  // 3. 가장 큰 숫자를 포비의 점수로 저장
  // 4. 크롱의 4가지 경우 체크 (왼쪽 각 자리 덧셈 / 왼쪽 각 자리 곱셈 / 오른쪽 각 자리 덧셈 / 오른쪽 각 자리 곱셈)
  // 5. 가장 큰 숫자를 크롱의 점수로 저장
  // 6. 두 숫자를 비교하여 값 출력

  let answer;

  // 예외 처리
  const exception = (num1, num2) => {
    return num1 + 1 === num2 ? true : false;
  };

  // 더하기
  const add = (number) => {
    return number
      .toString()
      .split("")
      .map((num) => parseInt(num))
      .reduce((p, c) => p + c, 0);
  };

  // 곱하기
  const multi = (number) => {
    return number
      .toString()
      .split("")
      .map((num) => parseInt(num))
      .reduce((p, c) => p * c, 1);
  };

  // 최대 점수 구하기
  const getMax = (num1, num2) => {
    const left_add = add(num1);
    const left_multi = multi(num1);
    const right_add = add(num2);
    const right_multi = multi(num2);

    return Math.max(left_add, left_multi, right_add, right_multi);
  };

  // 코드 작성
  if (!exception(pobi[0], pobi[1]) || !exception(crong[0], crong[1])) return -1;

  const pobi_score = getMax(pobi[0], pobi[1]);
  const crong_score = getMax(crong[0], crong[1]);

  if (pobi_score > crong_score) answer = 1;
  else if (pobi_score < crong_score) answer = 2;
  else answer = 0;

  return answer;
}

module.exports = problem1;
