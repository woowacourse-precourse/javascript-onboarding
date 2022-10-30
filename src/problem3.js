function problem3(number) {
  var answer = 0;
  // input이 최대 10,000 이기에 연산 시간이 100,000초를 넘지 않습니다.
  for (i = 3; i <= number; i++) {
    const str = String(i);
    for (j = 0; j < str.length; j++) {
      if (str[j] === "3" || str[j] === "6" || str[j] === "9") {
        answer += 1;
      }
    }
  }

  return answer;
}

module.exports = problem3;
