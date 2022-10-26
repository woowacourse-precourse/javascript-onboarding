function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    i = i.toString();
    if (i.includes(3) || i.includes(6) || i.includes(9)) {
      answer++;
    }
  }
  return answer;
}

module.exports = problem3;
