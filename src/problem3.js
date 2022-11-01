function problem3(number) {
  let standard = ["3", "6", "9"];
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let numCnt = String(i)
      .split("")
      .filter((i) => standard.includes(i)).length;
    answer += numCnt;
  }
  return answer;
}

module.exports = problem3;
