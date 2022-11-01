// @ts-check

const CLAP = Object.freeze({
  THREE: "3",
  SIX: "6",
  NINE: "9",
});

/**
 * @param {number} number
 * @returns {number}
 */
function problem3(number) {
  let count = 0;

  // 1부터 number까지 순회하며 3, 6, 9의 개수만큼 count 증가
  for (let i = 1; i <= number; i++) {
    `${i}`
      .split("")
      .forEach(
        (num) =>
          (num === CLAP.THREE || num === CLAP.SIX || num === CLAP.NINE) &&
          count++
      );
  }
  return count;
}

console.log(problem3(13)); // 4
console.log(problem3(33)); // 14

module.exports = problem3;
