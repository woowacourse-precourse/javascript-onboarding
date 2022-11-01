function problem3(number) {
  var answer = 0;

  for (var i = 1; i <= number; ++i) {
    let num = i;
    while (num > 0) {
      if (num % 10 == 3 || num % 10 == 6 || num % 10 == 9) answer += 1;
      num = parseInt(num / 10);
    }
  }

  return answer;
}

module.exports = problem3;
