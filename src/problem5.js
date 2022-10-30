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

function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;
