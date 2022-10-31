function isValid(number) {
  return (
    typeof number !== 'number' ||
    (number < 1 || number > 10000)
  ) ? false : true;
}

function strToArr(strIter) {
  return strIter.split('');
}

function findThreeSixNineElement(element, index, array) {
  array[index] = ["3", "6", "9"].includes(element) ? 1 : 0;
}

function getSumArrIter(arrIter) {
  return arrIter.reduce(
    function add(sum, currValue) {
      return sum + currValue
    }, 0);
}

function threeSixNine(strIter) {
  const arrIter = strToArr(strIter);
  arrIter.forEach(findThreeSixNineElement);
  return getSumArrIter(arrIter);
}

function playGame(number) {
  let clapCount = 0;
  for (let i = 1; i <= number; i++) {
    const strIter = i.toString();
    clapCount += threeSixNine(strIter);
  }
  return clapCount;
}

function problem3(number) {
  if (!isValid(number)) {
    return 0;
  }
  return playGame(number);
}

module.exports = problem3;
