function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    // 특정 숫자 확인을 위해 for 문 내 i부터 매개변수까지 각 숫자 배열화
    let nums = String(i).split("");

    // 배열화된 변수를 탐색하는 이중 for문 작성
    for (let j = 0; j < nums.length; j++) {
      if (
        nums[j].includes("3") ||
        nums[j].includes("6") ||
        nums[j].includes("9")
      ) {
        answer++;
      }
    }
  }

  // 결과값 산출
  return answer;
}

module.exports = problem3;
