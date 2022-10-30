const isInvalidPageRange = (left, right) => {
  return left < 2 || right < 2 || left > 399 || right > 399;
};

const isValidPage = (page) => {
  const [left, right] = page;

  if (isInvalidPageRange(left, right)) return false;

  return true;
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
