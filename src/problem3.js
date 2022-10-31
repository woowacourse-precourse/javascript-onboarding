function problem3(number) {
  var answer = 0;

  for (var i = 1; i <= number; i++) {
    answer += getCount(i, 3) + getCount(i, 6) + getCount(i, 9);
  }

  return answer;
}

function getCount(num, target) {
  var arr = convertStringToArray(String(num));

  return arr.filter((e) => String(target) === e).length;
}

function convertStringToArray(str) {
  return Array.from(str);
}

module.exports = problem3;
