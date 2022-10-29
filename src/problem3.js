function problem3(number) {
  var answer;

  return answer;
}

module.exports = problem3;

/**
 * 1. 3, 6, 9가 있는 숫자들을 찾는다.
 * 2. 3의 배수 찾기와 헷갈려서는 안된다. includes되느냐의 문제
 * 3. 숫자 배열을 순회하면서 count를 추가한다.
 */

/**
 * @param {number} num
 * @returns {number}
 */
function getThree(num) {
  const split = num.toString().split("");
  let count = 0;

  split.forEach((ch) => {
    ch === "3";
    count++;
  });

  return count;
}
