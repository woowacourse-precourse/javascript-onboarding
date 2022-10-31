function problem3(number) {
  var answer = 0;

  // 숫자를 문자열로 변환 후 리스트로 만들어 각 원소가 '3', '6', '9' 중 하나이면 +1
  for (let i = 1; i <= number; i++) {
    let temp = String(i).split("");

    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === "3" || temp[j] === "6" || temp[j] === "9") {
        answer += 1;
      }
    }
  }

  return answer;
}

module.exports = problem3;
