function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const testCase = ("" + i).match(/[3|6|9]/g);
    if (testCase != null) answer += testCase.length;
  }
  return answer;
}

module.exports = problem3;
