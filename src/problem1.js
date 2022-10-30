function problem1(pobi, crong) {
  var answer;
  validChecker(pobi, crong);

  return answer;
}

function validChecker(pobi, crong) {
  return (
    Math.abs(pobi[0] - pobi[1]) !== 1 || Math.abs(crong[0] - crong[1]) !== 1
  );
}

module.exports = problem1;
