function countClap(numbers) {
  let count = 0;

  numbers.forEach((number) =>
    number
      .toString()
      .split("")
      .map(Number)
      .forEach((num) => (num === 3 || num === 6 || num === 9 ? count++ : count))
  );

  return count;
}

function problem3(number) {
  const gameNumbers = Array.from({ length: number }, (_, i) => i + 1);

  return countClap(gameNumbers);
}

module.exports = problem3;
