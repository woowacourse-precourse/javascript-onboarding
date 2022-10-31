function problem3(number) {
  let answer = 0;
  let reg = /3|6|9/g;

  for (let i = 1; i <= number; i++) {
    answer += (String(i).match(reg) || []).length;
  }
  return answer;
}

module.exports = problem3;
