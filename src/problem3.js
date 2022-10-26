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
  const gameNumbers = Array.from({ length: number }, (_, i) => i + 1);

  return countClap(gameNumbers);
}
module.exports = problem3;
