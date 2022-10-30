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

function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;
