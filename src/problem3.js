function problem3(number) {
  // 빈배열 선언
  let result = [];
  // number값이 들어오면 배열에 푸쉬
  for (let i = 1; i <= number; i++) {
    result.push(i);
  }
  // 1. 모든 값을 문자열 변환
  // 2. split("")로 모든 문자열 ""감싸기
  // 3. filter()로 3,6,9를 제외한 값을 걸러주기
  // 4. 3,6,9 남은 배열로 길이 구하기 (length)
  // 5. 문자값을 정수로 나타내줌 (perseInt)
  let answer = parseInt(
    result
      .toString()
      .split("")
      .filter((v) => (v == 3 || v == 6 || v == 9 ? v : "")).length
  );

  return answer;
}

module.exports = problem3;
