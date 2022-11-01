function problem3(number) {
  let answer = 0;
  const regexStr = /[369]/g;
  for (let i = 1; i <= number; i++) {
    answer += (i.toString().match(regexStr) || []).length;
  }
  return answer;
}

module.exports = problem3;
