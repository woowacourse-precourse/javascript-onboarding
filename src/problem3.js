function problem3(number) {
  var answer;
function getClapCount(number) {
  let count = 0;
  number
    .toString()
    .split("")
    .map((num) => {
      if (["3", "6", "9"].includes(num)) count += 1;
    });

  return count;
}

module.exports = problem3;
