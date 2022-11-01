function problem3(number) {
  var answer;

  for (var i = 1; i <= number; i++) {
    answer += countNumber(i);
  }

  return answer;
}

function countNumber(number) {
  var cnt = 0;
  for (var ch of number.toString()) {
    if (ch === '3' || ch === '6' || ch === '9') {
      cnt++;
    }
  }

  return cnt;
}

module.exports = problem3;
