/* 
  메인 로직
  1.[x] 1부터 n까지 숫자 순회
  2. 3,6,9 판별
    2.1. [x] number를 10으로 나눈 나머지가 3,6,9 중 하나면 박수 + 1
    2.2. [x] number <- number / 10
*/

/**
 * count clap
 * @param {number} number 
 * @returns {number} clap count number of 3,6,9
 */
const check369 = (number) => {
  let clap = 0;

  while (number) {
    if (number % 10 === 3 || number % 10 === 6 || number % 10 === 9) {
      clap++;
    }
    number = parseInt(number / 10);
  }

  return clap;
}

/**
 * Main function - refeat check369 function while 1~number
 * @param {number} number 
 * @returns {number} clap - all clap 
 */
function problem3(number) {
  let clap = 0;

  for (let i = 1; i <= number; i++) {
    clap += check369(i);
  }

  return clap;
}

module.exports = problem3;
