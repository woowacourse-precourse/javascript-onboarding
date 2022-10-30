function problem3(number) {
  var answer = 0;

  for (var i = 1; i <= number; i++) {
    answer += getCount(i, 3) + getCount(i, 9) + getCount(i, 9);
  }

  return answer;
}

function getCount(num, target) {
  var arr = Array.from(String(num));

  return arr.filter((e) => String(target) === e).length;
}

module.exports = problem3;
