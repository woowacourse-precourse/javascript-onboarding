function check3(a) {
  var cnt = 0;
  while (a > 0) {
    if (a % 10 == 3 || a % 10 == 6 || a % 10 == 9) {
      cnt++;
    }
    a = parseInt(a / 10);
  }
  return cnt;
}

function problem3(number) {
  var answer = 0;
  for (var i = 1; i <= number; i++) {
    answer += check3(i);
  }
  return answer;
}

module.exports = problem3;
