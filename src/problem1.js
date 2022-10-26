function problem1(pobi, crong) {
  var answer;
  return answer;
}

const copyArray = targetArray => {
  return [...targetArray];
};

const multiplicationFunction = (first, second) => {
  return first * second;
};

const plusFunction = (first, second) => {
  return first + second;
};

const each = (iterable, func) => {
  for (const iterator of iterable) {
    func(iterator);
  }

  return;
};

const map = (array, func) => {
  const resultArray = [];

  each(array, element => resultArray.push(func(element)));

  return resultArray;
};

/**
 * 숫자를 인수로 받아 각 자리 숫자를 분리시킨다.
 * @param {number} numericItem
 * @returns {number[]} 분리된 숫자를 배열로 반환한다.
 */
const detachEachNumeric = numericItem => {
  if (typeof numericItem !== "number") {
    throw new TypeError("Only numeric elements are possible.");
  }

  const stringArray = numericItem.toString().split("");
  const resultArray = map(stringArray, character => {
    return Number.parseInt(character, 10);
  });

  return resultArray;
};

/**
 * @param {number[]} numericArrays
 * @returns {number[][]} 각 숫자 배열을 순회하며 숫자의 요소를 분리시킨 뒤 배열로 반환한다.
 */
const getSeparatedNumericArrays = numericArrays => {
  const resultArray = map(numericArrays, numericElement => {
    return detachEachNumeric(numericElement);
  });

  return resultArray;
};

/**
 * @param {[number, number]} numberArray 첫번째 요소는 홀수, 두번째 요소는 짝수를 기대한다.
 * @param {Function} behaviorFunc 기능함수를 전달한다.
 * @returns {[number, number]} 홀수와 짝수를 각 기능에 맞게 값을 반환한다.
 */
const calculateEachElement = (numberArray, behaviorFunc) => {
  const copyNumberArray = copyArray(numberArray);
  const separatedNumericArrays = getSeparatedNumericArrays(copyNumberArray);
  const resultArray = map(separatedNumericArrays, numberArray => {
    return numberArray.reduce(behaviorFunc);
  });

  return resultArray;
};

module.exports = problem1;
