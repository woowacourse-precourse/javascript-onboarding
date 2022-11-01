function problem3(number) {
  let answer = 0;
  const REGEX_369 = /3|6|9/g;

  for (let i = 1; i <= number; i++) {
    answer += (String(i).match(REGEX_369) || []).length;
  }

  return answer;
}

module.exports = problem3;
