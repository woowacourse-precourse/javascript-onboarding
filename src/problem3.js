function problem3(number) {
  var answer;
  var count = 0;
  for (var i = 1; i <= number; i++) {
    i = String(i);
    for (var j = 0; j < i.length; j++) {
      if (i[j] == '3' || i[j] == '6' || i[j] == '9') {
        count += 1;
      }
    }
  }
  answer = count;
  return answer;
}

module.exports = problem3;
