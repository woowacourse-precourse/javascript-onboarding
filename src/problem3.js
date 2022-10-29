function problem3(number) {
  var answer;
  answer = 0;

  //369 갯수만큼 숫자세기
  for (let i = 1; i < number + 1; i++) {
    var set_number = "" + i;
    for (var j = 0; j < set_number.length; j++) {
      if (set_number[j] == 3 || set_number[j] == 6 || set_number[j] == 9) {
        answer += 1;
      }
    }
  }
  return answer;
}

module.exports = problem3;
