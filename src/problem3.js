function countThree(num) {
  var cnt = 0;
  while (num > 0) {
    var one = num % 10;
    num = Math.floor(num / 10);
    if (one != 0 && one % 3 == 0) {
      cnt++;
    }
  }
  return cnt;
}

function problem3(number) {
  var answer = 0;
  for (var i = 1; i <= number; i++) {
    answer += countThree(i);
  }
  return answer;
}

module.exports = problem3;
