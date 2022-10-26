/**
 *
 * @param {number} num
 * @returns {number[]} numbers
 */
function getNumbersArr(num) {
  let numbers = [];
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    numbers.push(parseInt(numString.charAt(i)));
  }
  return numbers;
}

function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let numbersArr = getNumbersArr(i);
    numbersArr = numbersArr.filter((v) => v === 3 || v === 6 || v === 9);
    answer = answer + numbersArr.length;
  }

  return answer;
}

module.exports = problem3;
