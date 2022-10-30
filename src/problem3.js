function isValid(number) {
  if (typeof number !== 'number') {
    return false;
  }
  if (number < 1 || number > 10000) {
    return false;
  }
  return true;
}

function strToArr(strIter) {
  const arrIter = strIter.split('');
  return arrIter;
}

function findThreeSixNineElement(element, index, array) {
  // if (["3", "6", "9"].includes(element)) array[index] = 1;
  // else array[index] = 0;
  array[index] = ["3", "6", "9"].includes(element) ? 1 : 0;
}

function getSumArrIter(arrIter) {
  return arrIter.reduce(function add(sum, currValue) {return sum + currValue}, 0);
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

console.log(problem3(13));
console.log(problem3(33));
console.log(problem3(10000));
console.log(problem3(1));
console.log(problem3(5000));
console.log(problem3(7500));
