function problem3(number) {
  var answer = 0;
  for (var i = 1; i < number + 1; i++) {
    let str_i = i.toString();
    for (var j = 0; j < str_i.length; j++) {
      if (str_i[j] == 3 || str_i[j] == 6 || str_i[j] == 9) {
        answer++;
      }
    }
  }

  return answer;
}

module.exports = problem3;
