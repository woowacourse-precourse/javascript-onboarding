function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    //369 문자를 찾음
    const testCase = ("" + i).match(/[3|6|9]/g);

    //찾은 문자의 개수를 answer에 더해줌
    if (testCase != null) answer += testCase.length;
  }
  return answer;
}

module.exports = problem3;
