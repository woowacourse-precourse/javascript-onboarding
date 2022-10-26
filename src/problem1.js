/**
 *
 * @param {number} num
 * @returns {number[]} array of digits number
 */
function getNumbersArr(num) {
  let numbers = [];
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    numbers.push(parseInt(numString.charAt(i)));
  }
  return numbers;
}
/**
 *
 * @param {number} pageNum
 * @returns {number} maximum value between sum and multiple
 */
function getMaxNum(pageNum) {
  let max = 0;
  let numbers = getNumbersArr(pageNum);
  let sum = numbers.reduce((sum, curr) => sum + curr, 0);
  let multiple = numbers.reduce((sum, curr) => sum * curr, 1);
  return Math.max(sum, multiple);
}

function problem1(pobi, crong) {
  var answer;
  // pobi win === 1, lose ===2
  let pobiMax = 0;
  let crongMax = 0;

  //Exception:
  // 1. 연속되는 페이지가 아닌 경우
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  // 2. 왼쪽페이지가 홀수가 아닌 경우
  if (pobi[0] % 2 === 0 || crong[0] % 2 === 0) return -1;
  // 3. 시작면이나 마지막 면을 펼친 경우
  if (pobi[0] === 1 || crong[0] === 1) return -1;
  if (pobi[1] === 400 || crong[1] === 400) return -1;

  // Get each maximum value
  pobi.forEach((pageNum) => {
    let maxNum = getMaxNum(pageNum);
    if (maxNum > pobiMax) {
      pobiMax = maxNum;
    }
  });
  crong.forEach((pageNum) => {
    let maxNum = getMaxNum(pageNum);
    if (maxNum > crongMax) {
      crongMax = maxNum;
    }
  });

  // Matching score
  if (pobiMax > crongMax) return 1;
  else if (crongMax > pobiMax) return 2;
  else if (crongMax === crongMax) return 0;
  return -1;
}

module.exports = problem1;
