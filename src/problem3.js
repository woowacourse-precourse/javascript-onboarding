function problem3(number) {
  var answer;
  var clap = 0;
  var num;

  for (var i = 1; i < number + 1; i++) {
    num = i;
    while (num !== 0) {
      if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) {
        clap += 1;
      }
      num = Math.floor(num / 10);
    }
  }
  answer = clap;

  return answer;
}

module.exports = problem3;
