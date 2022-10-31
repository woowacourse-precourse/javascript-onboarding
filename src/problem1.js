// @ts-check

/**
 *
 * @param {number[]} pobi
 * @param {number[]} crong
 * @returns {-1 | 1 | 2 | 0}
 */

function problem1(pobi, crong) {
  if (isInvalidPages(pobi) || isInvalidPages(crong)) {
    return -1;
  }

  const pobiMaxNumber = getMaxNumber(pobi);
  const crongMaxNumber = getMaxNumber(crong);

  if (pobiMaxNumber > crongMaxNumber) {
    return 1;
  } else if (pobiMaxNumber < crongMaxNumber) {
    return 2;
  } else {
    return 0;
  }
}

/**
 * 유효하지 않은 input 인지 체크
 * @param {number[]} pages
 * @returns {boolean}
 */

function isInvalidPages(pages) {
  const [oddPage, evenPage] = pages;

  const isUnconnect = oddPage + 1 !== evenPage;
  const isInvalidRange = oddPage < 1 || evenPage > 400;
  const isWrongNumber = oddPage % 2 !== 1 || evenPage % 2 !== 0;

  return isUnconnect || isInvalidRange || isWrongNumber;
}

/**
 * 각 page의 digit 을 모두 더한 값과 모두 곱한 값 중 더 큰 값을 반환
 * @param {number[]} pages
 * @returns {number}
 */

function getMaxNumber(pages) {
  let maxNumber = 0;

  pages.forEach((page) => {
    const eachDigit = separateNumber(page);

    const sumOfNumbers = eachDigit.reduce((prev, current) => prev + current);
    const mulOfNumbers = eachDigit.reduce((prev, current) => prev * current);

    const biggerNumber = getBiggerNumber(sumOfNumbers, mulOfNumbers);

    maxNumber = getBiggerNumber(biggerNumber, maxNumber);
  });

  return maxNumber;
}

/**
 * number 를 digit 으로 분리
 * @param {number} number
 * @returns {number[]}
 */

function separateNumber(number) {
  const strNumber = String(number);
  const eachDigit = [...strNumber].map((value) => Number(value));

  return eachDigit;
}

/**
 * num1, num2 중 더 큰 수를 반환
 * @param {number} num1
 * @param {number} num2
 * @returns
 */

function getBiggerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

module.exports = problem1;
