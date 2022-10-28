function problem3(number) {
  var answer = 0;
  // 1) 차례 숫자까지 반복하면서 문자열로 바꾸는 과정
  for (let i = 1; i <= number; i++) {
    let temp = i.toString();
    // 2) 해당 문자열을 개별의 문자로 보고 손뼉을 더하는 과정
    for (let num of temp) {
      if (["3", "6", "9"].includes(num)) {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
