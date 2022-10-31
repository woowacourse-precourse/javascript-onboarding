function problem3(number) {
  var answer = 0;
  for (var i = 1; i < number + 1; i++) {
    var num_arr = (i + "").split("");
    answer += num_arr.filter((element) => "3" === element).length;
    answer += num_arr.filter((element) => "6" === element).length;
    answer += num_arr.filter((element) => "9" === element).length;
  }
  return answer;
}

module.exports = problem3;
