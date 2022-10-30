function problem3(number) {
  let answer = 0;

  for (i = 3; i <= number; i++) {
    answer += i.toString().replace(/[^369]/g, "").length;
  }
  return answer;
}

module.exports = problem3;
