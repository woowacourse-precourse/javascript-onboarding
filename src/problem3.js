function problem3(number) {
  let answer = 0;
  const clap = /3|6|9/g;

  for (let i = 1; i <= number; i++) {
    answer += (String(i).match(clap) || []).length;
  }

  return answer;
}

module.exports = problem3;
