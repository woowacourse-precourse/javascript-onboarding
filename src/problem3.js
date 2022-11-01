function problem3(number) {
  var answer = 0;
  const regex = /3|6|9/g;
  for (let i = 1; i <= number; i++) {
      answer += (String(i).match(regex) || []).length;
  }
  return answer;
}

module.exports = problem3;
