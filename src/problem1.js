const exception = (pobi, crong) => {
  if (pobi[0] === 1 || pobi[0] === 399 || crong[0] === 1 || crong[0] === 399)
    return -1;
  if (pobi.reduce((a, b) => Math.abs(a) - b) !== -1) return -1;
  if (crong.reduce((a, b) => Math.abs(a) - b) !== -1) return -1;
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
