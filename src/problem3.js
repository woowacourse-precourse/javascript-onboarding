// @ts-check

/**
 *
 * @param {number} number 1 이상 10,000 이하인 자연수
 * @returns {number} 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수
 */

function problem3(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    const eachDigit = separateNumber(i);

    eachDigit.forEach((n) => {
      if (n === 3 || n === 6 || n === 9) {
        count = count + 1;
      }
    });
  }

  return count;
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

module.exports = problem3;
