function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let now = i;

    while (now != 0) {
      if (now % 10 == 3 || now % 10 == 6 || now % 10 == 9) {
        answer += 1;
      }
      now = Math.floor(now / 10);
    }
  }
  return answer;
}

module.exports = problem3;