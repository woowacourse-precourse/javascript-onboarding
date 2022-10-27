function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += i
      .toString()
      .split('')
      .filter((v) => v === '3' || v === '6' || v === '9').length;
  }

  return answer;
}
module.exports = problem3;
