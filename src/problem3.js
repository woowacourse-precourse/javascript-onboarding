function problem3(number) {
  var regExp = /3|6|9/g;
  var answer = 0;

  for (var i = 1; i <= number; i++) {
    if (regExp.test(i)) answer += String(i).match(regExp).length;
  }

  return answer;
}

module.exports = problem3;
