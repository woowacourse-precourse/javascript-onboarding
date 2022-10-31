function problem3(number) {
  var answer = 0;

  for (var i = 1; i <= number; ++i) {
    while (i > 0) {
      if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9) answer += 1;
      i /= 10;
    }
  }

  return answer;
}

module.exports = problem3;
