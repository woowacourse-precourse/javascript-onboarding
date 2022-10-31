function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const matched = `${i}`.match(/[369]/g);
    if (matched) answer += matched.length;
  }
  return answer;
}

module.exports = problem3;
