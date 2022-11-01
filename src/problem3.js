function problem3(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    // 숫자 데이터를 문자 데이터로 변환
    let num = i.toString();
    // 3, 6, 9가 들어 있을 때마다 result에 1씩 더하기
    for (let j = 0; j < num.length; j++) {
      if (num[j] === "3" || num[j] === "6" || num[j] === "9") {
        result++;
      }
    }
  }
  return result;
}

module.exports = problem3;
