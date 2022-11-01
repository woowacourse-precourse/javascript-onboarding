function problem3(number) {
  const clapNums = /3|6|9/g;
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const exist = String(i).match(clapNums);
    if (exist) {
      answer += exist.length;
    }
  }
  return answer;
}

module.exports = problem3;
