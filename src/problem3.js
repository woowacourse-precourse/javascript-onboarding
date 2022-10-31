function problem3(number) {
  let answer = 0;
  let clap = [3, 6, 9];
  for (let i = 1; i <= number; i++) {
    let target = i;
    while (target > 0) {
      if (clap.includes(target % 10)) answer++;
      target = parseInt(target / 10);
    }
  }
  return answer;
}

module.exports = problem3;
