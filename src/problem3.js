/**
 * @param {number} number
 * @returns {string[]}
 */
const getNumberToCharList = (number) => {
  return number.toString().split("");
};

/**
 * @param {number} number
 * @returns {number} 손뼉 쳐야하는 횟수
 */
const get369Count = (number) => {
  const numbers = getNumberToCharList(number);
  return numbers.filter((c) => c === "3" || c === "6" || c === "9").length;
};

function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += get369Count(i);
  }

  return answer;
}

module.exports = problem3;
