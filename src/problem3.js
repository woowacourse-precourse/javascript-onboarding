function problem3(number) {
  let answer = 0;
  const cntRegex = /3|6|9/g;

  for (let i = 1; i <= number; i++) {
    answer += ((i + "").match(cntRegex) || []).length;
  }
  return answer;
}

module.exports = problem3;
