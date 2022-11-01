const TARGET_NUMBERS = [3, 6, 9];

const countClap = (numbers) => {
  let count = 0;

  numbers.forEach((number) =>
    number
      .toString()
      .split("")
      .map(Number)
      .forEach((num) => (TARGET_NUMBERS.includes(num) ? count++ : count))
  );

  return count;
};

const getNumbersUsedInGame = (number) => {
  return Array.from({ length: number }, (_, i) => i + 1);
};

const problem3 = (number) => {
  const numbersUsedInGame = getNumbersUsedInGame(number);

  return countClap(numbersUsedInGame);
};

module.exports = problem3;
