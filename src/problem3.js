function problem3(number) {
  var answer;

  let count = 0;

  // 조건 1. 인수로 받은 숫자만큼 반복문 돌리기
  for (let i = 1; i <= number; i++) {
    // 조건 2. 해당 인덱스에서 각 자릿수에 
    // 3, 6, 9가 들어가는지 확인하기
    for (let char of String(i)) {
      if (char == "3" || char == "6" || char == "9") count++;
    }
  }

  answer = count;
  return answer;
}

module.exports = problem3;
