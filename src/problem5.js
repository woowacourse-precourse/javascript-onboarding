const copyArray = targetArray => {
  return [...targetArray];
};

const classifyMoney = (currentMoney, won) => Math.floor(currentMoney / won);

const getRemainingMoney = (currentMoney, wonCount, won) => currentMoney - wonCount * won;

const updateClassificationResults = (resultArray, currentIndex, wonCount) => {
  const copiedArray = copyArray(resultArray);

  copiedArray[currentIndex] = wonCount;

  return copiedArray;
};

const recursiveClassifiers = (currentMoney, currentIndex, resultArray) => {
  if (currentIndex === 9) {
    return copyArray(resultArray);
  }

  const classification = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const target = classification[currentIndex];
  const moneyCount = classifyMoney(currentMoney, target);
  const remainingMoney = getRemainingMoney(currentMoney, moneyCount, target);
  const newResultArray = updateClassificationResults(resultArray, currentIndex, moneyCount);
  const nextIndex = currentIndex + 1;

  return recursiveClassifiers(remainingMoney, nextIndex, newResultArray);
};

const checkException = value => {
  if (typeof value !== "number") {
    throw new TypeError("Only numeric elements are possible.");
  }

  // 1 이상 1,000,000 이하인 자연수
  if (value < 1 || 1000000 < value) {
    throw new RangeError(
      "Only natural numbers greater than or equal to 1 and less than or equal to 1,000,000."
    );
  }

  return false;
};

function problem5(money) {
  checkException(money);

  const answer = recursiveClassifiers(money, 0, []);

  return answer;
}

module.exports = problem5;
