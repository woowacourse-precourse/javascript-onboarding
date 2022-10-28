function problem3(number) {
  let answer = 0;
  let reg = [];

  for (let i = 1; i <= number; i++) {
    reg = String(i).match(/[369]/g);
    answer += reg !== null ? reg.length : 0;
  }

  return answer;
}

module.exports = problem3;
