function problem3(number) {
  var answer = 0;

  for (var i = 1; i < number + 1; i++) {
    if (number < 10) {
      if (i % 1 === 3 || i % 10 === 3 || i / 10 === 9) {
        answer++;
      } // 일의 자리에 3, 6, 9가 들어갈 경우
    }
  }

  return answer;
}

module.exports = problem3;
