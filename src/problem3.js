function problem3(number) {
  let answer;

  answer = countNumberOfClap(number);
  return answer;
}

function countNumberOfClap(number) {
  let result;

  result = 0;
  for (let i = 1; i <= number; i++) {
    result += i
      .toString()
      .split("")
      .filter((digit) => ["3", "6", "9"].includes(digit)).length;
  }
  return result;
}

module.exports = problem3;
