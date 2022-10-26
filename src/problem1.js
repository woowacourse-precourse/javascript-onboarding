function problem1(pobi, crong) {}

function sumNumber(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, current) => parseInt(sum) + parseInt(current), 0);
}

module.exports = problem1;
