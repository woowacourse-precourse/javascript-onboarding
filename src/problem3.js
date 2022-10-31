function problem3(number) {
  var answer = 0;
  var num;
  for (var i = 1; i < number + 1; i++) {
    num = String(i).split("");
    for (var j = 0; j < num.length; j++) {
      if (num[j] == "3" || num[j] == "6" || num[j] == "9") {
        answer += 1;
      }
    }
  }
  return answer;
}

module.exports = problem3;
