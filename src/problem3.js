function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += checker(String(i).split(""));
  }
  return answer;
}

function checker(x) {
  let target = ["3", "6", "9"];
  let answer = 0;
  for (const value of x) {
    if (target.includes(value)) {
      answer += 1;
    }
  }
  return answer;
}

module.exports = problem3;
