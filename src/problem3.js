function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    for (let c of i.toString()) {
      if (c > 2 && c % 3 === 0) {
        answer++;
      }
    }
  }

  return answer;
}

module.exports = problem3;
