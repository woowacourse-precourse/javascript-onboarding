function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    const numMatch = ("" + i).match(/[3|6|9]/g);
    if (numMatch) answer += numMatch.length;
  }
  return answer;
}

module.exports = problem3;
