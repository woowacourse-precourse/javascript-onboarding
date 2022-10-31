/* 
  메인 로직
  다음 과정을 number가 0이 될 때까지 반복
  1. [x] number를 10으로 나눈 나머지가 3,6,9 중 하나면 박수 + 1
  2. [x] number <- number / 10
*/

/**
 * Main function - count 3,6,9 claps
 * @param {number} number 
 * @returns {number} clap - count number of 3,6,9
 */
function problem3(number) {
  let clap = 0;

  while (number) {
    if (number % 10 === 3 || number % 10 === 6 || number % 10 === 9) {
      clap++;
      number = parseInt(number / 10);
    }
  }

  return clap;
}

module.exports = problem3;
