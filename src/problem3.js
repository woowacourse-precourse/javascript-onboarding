function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += String(i).match(/[3|6|9]/g)?.length || 0;
  }

  return answer;
}

module.exports = problem3;