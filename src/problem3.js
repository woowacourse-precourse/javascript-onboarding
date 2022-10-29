function problem3(number) {
  var answer = 0;

  for (var i = 1; i < number; i++) {
    var str = '' + (i + 1);
    for (var j = 0; j < str.length; j++) {
      if (str[j] == 3 || str[j] == 6 || str[j] == 9) {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
