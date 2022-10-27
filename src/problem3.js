/**
 * @param {number} num
 * @returns {number}
 */
function calculateClapCount(num) {
  const numArr = String(num)
    .split('')
    .map((value) => Number(value));
  let result = 0;

  for (let i = 0; i < numArr.length; i++) {
    const num = numArr[i];

    if (num !== 0 && num % 3 === 0) {
      result++;
    }
  }

  return result;
}

/**
 * @param {number} number
 * @returns {number}
 */
function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const count = calculateClapCount(i);

    if (count !== 0) answer += count;
  }

  return answer;
}

module.exports = problem3;
