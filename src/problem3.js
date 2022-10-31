function isException(number) {
  return (
    isNaN(number) || !Number.isInteger(number) || number < 1 || number > 10000
  );
}

function clapCount(number) {
  const stringNum = number.toString();
  let count = 0;

  for (let i = 0; i < stringNum.length; ++i) {
    if (
      stringNum.charAt(i) === '3' ||
      stringNum.charAt(i) === '6' ||
      stringNum.charAt(i) === '9'
    )
      ++count;
  }
  return count;
}

function problem3(number) {
  if (isException(number)) return -1;
}

module.exports = problem3;
