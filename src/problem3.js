function problem3(number) {
  var answer = 0;

  const num = /3|6|9/g;
  for (let i = 1; i <= number; i++) {
    answer += (String(i).match(num) || []).length;
  }
  return answer;
}

module.exports = problem3;