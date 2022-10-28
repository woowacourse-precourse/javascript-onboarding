const countThreeSixNine = (currentNumber) => {
  let threeSixNineCount = 0;
  const numberToString = currentNumber.toString();
  for (eachNumber of numberToString) {
    if (eachNumber === "3" || eachNumber === "6" || eachNumber === "9")
      threeSixNineCount++;
  }
  return threeSixNineCount;
};
const countClap = (number) => {
  let clapCount = 0;
  for (let currentNumer = 1; currentNumer <= number; currentNumer++) {
    clapCount += countThreeSixNine(currentNumer);
  }
  return clapCount;
};
function problem3(number) {
  let answer = countClap(number);
  return answer;
}

module.exports = problem3;
