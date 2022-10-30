function isException(number) {
  return (
    isNaN(number) || !Number.isInteger(number) || number < 1 || number > 10000
  );
}

function problem3(number) {
  if (isException(number)) return -1;
}

module.exports = problem3;
