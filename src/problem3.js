function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const s = i.toString();
    answer += (s.match(/3|6|9/gi) || []).length;
  }
  return answer;
}

module.exports = problem3;
