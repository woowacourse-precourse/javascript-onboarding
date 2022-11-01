function problem3(number) {
  var answer = 0;
  let rule = /3|6|9/g;
  if (typeof number !== "number") {
    return number;
  }
  for (let i = 0; i <= number; i++) {
    answer += (String(i).match(rule) || []).length;
  }
  return answer;
}

module.exports = problem3;
