function problem3(number) {
  var answer = 0;
  for (var i = 1; i <= number; i++) {
    var str_arr = i.toString().split("");
    str_arr.map((k) => {
      if (k == "3" || k == "6" || k == "9") answer++;
    });
  }
  return answer;
}

module.exports = problem3;
