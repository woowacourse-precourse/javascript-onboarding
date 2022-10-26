function countClap(numbers) {
  return numbers
    .map(
      (number) =>
        number
          .toString()
          .split("")
          .map(Number)
          .filter((el) => el === 3 || el === 6 || el === 9).length
    )
    .reduce((a, b) => a + b, 0);
}

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
