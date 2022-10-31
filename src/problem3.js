function getCountOf3Or6Or9(number) {
  return [...number.toString()].filter((digit) =>
    [3, 6, 9].includes(parseInt(digit))
  ).length;
}
function problem3(number) {
  let clapCount = 0;

  for (let currentNumber = 1; currentNumber <= number; currentNumber++) {
    clapCount += getCountOf3Or6Or9(currentNumber);
  }

  return clapCount;
}

module.exports = problem3;
