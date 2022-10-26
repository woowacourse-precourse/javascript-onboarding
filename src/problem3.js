function problem3(number) {
  var answer;
  let cnt = 0;
  for (var num = 1; num <= number; num++) {
    for (var char of String(num)) {
      if (char == "3" || char == "6" || char == "9") {
        cnt += 1;
      }
    }
  }
  answer = cnt;
  return answer;
}

module.exports = problem3;
