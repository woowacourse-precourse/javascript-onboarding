function problem3(number) {
  var answer = 0;
  // 1 ~ number 사이에 3과 6과 9의 개수를 반환하는 문제.
  for (let i = 1; i <= number; i++) {
    const numMatch = ("" + i).match(/[3|6|9]/g);
    if (numMatch) answer += numMatch.length;
  }
  return answer;
}

module.exports = problem3;
