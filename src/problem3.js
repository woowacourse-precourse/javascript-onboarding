function problem3(number) {
  var answer = 0;
  for (var i = 3; i < number + 1; i++) {
    answer += check_digit(i);
  }
  return answer;
}

function check_digit(num) {
  count = 0;
  var str_num = String(num);
  for (var i in str_num) {
    if (str_num[i] == "3" || str_num[i] == "6" || str_num[i] == "9") {
      count += 1;
    }
  }
  return count;
}

module.exports = problem3;
