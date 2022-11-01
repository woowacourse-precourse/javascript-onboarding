function countClap(number) {
  return [...number.toString()].filter((digit) =>
    ["3", "6", "9"].includes(digit)
  ).length;
}

function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += countClap(i);
  }

  return answer;
}

module.exports = problem3;
