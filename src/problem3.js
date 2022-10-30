function problem3(number) {
  let answer = 0;
  const pattern = /[3|6|9]/g;
  for (let i = 1; i <= number; i++) {
    const numCount = ("" + i).match(pattern);
    if (numCount !== null) answer += numCount.length;
  }
  return answer;
}

module.exports = problem3;
