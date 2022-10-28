function problem3(number) {
  var answer;
  for (i = 1; i <= number; i++) {
    if (
      String(i).indexOf("3") !== -1 ||
      String(i).indexOf("6") !== -1 ||
      String(i).indexOf("9") !== -1
    ) {
      answer++;
    }
    return answer;
  }
}
module.exports = problem3;
