function countClap(numbers) {
  const TARGET_NUMBERS = [3, 6, 9];
  let count = 0;

  numbers.forEach((number) =>
    number
      .toString()
      .split("")
      .map(Number)
      .forEach((num) => (TARGET_NUMBERS.includes(num) ? count++ : count))
  );

  return count;
}

function problem3(number) {
  const numbersUsedInGame = Array.from({ length: number }, (_, i) => i + 1);

  return countClap(numbersUsedInGame);
}

module.exports = problem3;
