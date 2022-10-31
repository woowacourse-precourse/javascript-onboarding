const countThreeSixNine = (currentNumber) => {
  const filterThreeSixNine = currentNumber
    .toString()
    .split("")
    .filter(
      (eachNumber) =>
        eachNumber === "3" || eachNumber === "6" || eachNumber === "9"
    );
  return filterThreeSixNine.length;
};

function problem3(number) {
  let clapCount = 0;
  for (let currentNumber = 1; currentNumber <= number; currentNumber++) {
    clapCount += countThreeSixNine(currentNumber);
  }

  return clapCount;
}

module.exports = problem3;
