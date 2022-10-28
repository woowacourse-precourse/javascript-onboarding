function numValueError(num) {
  return isNaN(num) || !Number.isInteger(num) || num < 1 || num > 400;
}

function isException(arg) {
  return (
    !Array.isArray(arg) ||
    arg.length !== 2 ||
    numValueError(arg[0]) ||
    numValueError(arg[1]) ||
    arg[0] % 2 === 0 ||
    arg[1] - arg[0] !== 1
  );
}

function problem1(pobi, crong) {
  if (isException(pobi) || isException(crong)) return -1;
}

module.exports = problem1;
