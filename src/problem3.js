function problem3(number) {
  var answer = 0;

  for (var i = 1; i < number + 1; i++) {
    if (number < 10) {
      if (i % 1 === 3 || i % 10 === 3 || i / 10 === 9) {
        answer++;
      } // 1의 자리에 3, 6, 9가 들어갈 경우
    } else {
      if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
        answer++;
      } // 두자리 자연수 중에 일의 자리에 3, 6, 9가 들어갈 경우
      if (
        Math.floor(i / 10) === 3 ||
        Math.floor(i / 10) === 6 ||
        Math.floor(i / 10) === 9
      ) {
        answer++; // 두자리 자연수 중에 십의자리에 3, 6. 9가 들어갈 경우
      }
    }
  }

  return answer;
}

module.exports = problem3;
