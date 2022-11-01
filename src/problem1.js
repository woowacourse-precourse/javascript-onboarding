/**
 * @param {number} leftPage 왼쪽 페이지
 * @param {number} rightPage 오른쪽 페이지
 * @returns
 */
const checkSuccessfulOpenPage = (leftPage, rightPage) => {
  if (leftPage < 1 || rightPage < 1) return true;
  if (leftPage > 400 || rightPage > 400) return true;
  if (leftPage % 2 !== 1) return true;
  if (rightPage % 2 !== 0) return true;

  return rightPage - leftPage !== 1;
};

/**
 * n자리의 숫자를 받아, 한자리 숫자 배열로 분할
 * @param {number} number
 * @returns {number[]} 각 자리의 숫자 배열
 */
const getSeparateNumberList = (number) => {
  return [...number.toString()].map((s) => parseInt(s));
};

/**
 * @param {number[]} numbers
 * @returns {number} 배열 요소들의 총합
 */
const getPlus = (numbers) => {
  const result = numbers.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  return result;
};

/**
 * @param {number[]} numbers
 * @returns {number} 배열 요소들을 모두 곱한 값
 */
const getMultiple = (numbers) => {
  const result = numbers.reduce(function multi(res, currValue) {
    return res * currValue;
  }, 1);
  return result;
};

/**
 * 각 자리 숫자를 모두 더하거나, 곱해 가장 큰수를 구함
 * @param {number[]} personNumberList
 * @returns {number} 가장 큰 수
 */
const getMaxNumber = (personNumberList) => {
  const calcRes = [];

  personNumberList.forEach((numberList) => {
    calcRes.push(getPlus(numberList));
    calcRes.push(getMultiple(numberList));
  });

  return Math.max(...calcRes);
};

function problem1(pobi, crong) {
  if (checkSuccessfulOpenPage(...pobi) || checkSuccessfulOpenPage(...crong)) {
    return -1;
  }

  const pobiNumbers = pobi.map((po) => getSeparateNumberList(po));
  const crongNumbers = crong.map((cr) => getSeparateNumberList(cr));

  const pobiMax = getMaxNumber(pobiNumbers);
  const crongMax = getMaxNumber(crongNumbers);

  if (pobiMax == crongMax) {
    return 0;
  } else if (pobiMax > crongMax) {
    return 1;
  } else {
    return 2;
  }
}

module.exports = problem1;
