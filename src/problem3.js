function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;

const NUMBER_RANGE_START = 1;
const NUMBER_RANGE_END = 10000;

function isNumber(number) {
  if (number < NUMBER_RANGE_START || number > NUMBER_RANGE_END) return false;
  if (typeof number === "number") return true;
  else return false;
}
