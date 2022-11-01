function isException(number) {
  return (
    isNaN(number) || !Number.isInteger(number) || number < 1 || number > 1000000
  );
}

function problem5(money) {
  if (isException(money)) return;
}

module.exports = problem5;
