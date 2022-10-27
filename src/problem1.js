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

const getMaxNumber = (plus, multiplication) => {
  return Math.max(...plus, ...multiplication);
};

const judgeVictory = (score, targetA, targetB) => {
  const TARGET_A_WIN = 1;
  const TARGET_B_WIN = 2;
  const DRAW = 0;

  if (targetA === targetB) {
    return DRAW;
  }

  const result = targetA < targetB ? TARGET_B_WIN : TARGET_A_WIN;

  return score + result;
};

const isExceptions = (additionResult, multiplicationResult, criterion = 0, depth = 2) => {
  const toBeExamined = [additionResult, multiplicationResult].flat(depth);
  const result = toBeExamined.includes(criterion);

  return result;
};

const calculateEachElementByPlus = numberArray => {
  const resultArray = map(numberArray, numericItms => {
    return calculateEachElement(numericItms, plusFunction);
  });

  return resultArray;
};

const calculateEachElementByMultiplication = numberArray => {
  const resultArray = map(numberArray, numericItms => {
    return calculateEachElement(numericItms, multiplicationFunction);
  });

  return resultArray;
};

/**
 * 과연 누가 책을 가져갈까..
 * @param {[number, number]} pobi
 * @param {[number, number]} crong
 * @returns {number}
 */
function problem1(pobi, crong) {
  const score = 0;
  const copyPobi = copyArray(pobi);
  const copyCrong = copyArray(crong);
  const [pobiPlus, crongPlus] = calculateEachElementByPlus([copyPobi, copyCrong]);
  const [pobiMultipl, crongMultipl] = calculateEachElementByMultiplication([copyPobi, copyCrong]);

  // 예외사항은 -1을 반환한다.
  if (isExceptions([pobiPlus, crongPlus], [pobiMultipl, crongMultipl])) {
    return -1;
  }

  const greatestNumberInPobi = getMaxNumber(pobiPlus, pobiMultipl);
  const greatestNumberInCrong = getMaxNumber(crongPlus, crongMultipl);
  const answer = judgeVictory(score, greatestNumberInPobi, greatestNumberInCrong);

  return answer;
}

module.exports = problem1;
