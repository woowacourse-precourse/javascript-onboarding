function problem3(number) {
  let answer = 0;
  if (number >= 1 && number <= 10000) {
    for (let i = 1; i <= number; i++) {
      if (
        String(i).includes(3) ||
        String(i).includes(6) ||
        String(i).includes(9)
      ) {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
